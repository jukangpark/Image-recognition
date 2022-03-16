import React, { useEffect, useState } from "react";

interface result {
  return_object: {
    data: [
      {
        class: string;
        confidence: string;
      }
    ];
  };
}

const App = () => {
  const [state, setState] = useState({
    file: null,
    base64URL: "",
  });
  const [result, setResult] = useState<result>();
  const [loading, setLoading] = useState(true);

  const getBase64 = (file: any) => {
    return new Promise((resolve) => {
      let baseURL: any = ""; // arrayBuffer 가 들어올 변수

      // make new fileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      //  on reader load something...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const BASE_URL = "http://aiopen.etri.re.kr:8000/ObjectDetect";

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];

    getBase64(file).then((result: any) => {
      file["base64"] = result;

      setState({
        base64URL: result.split(","),
        // Base64 로 변환한 문자가 , 기준으로 앞에 이미지 정보 그 이후로 base64 가 존재
        file,
      });
    });
  };

  useEffect(() => {
    const requestJson = {
      access_key: "bda5d230-c9f8-41db-8c86-35a0449483f1",
      argument: {
        file: String(state.base64URL[1]),
        type: "jpeg",
      },
    };

    if (state.base64URL === "") return;

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(requestJson),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setResult(data);
      });
  }, [state]);

  return (
    <div>
      <h1>이미지 인식 AI</h1>
      <h4>jpeg/jpg 파일만 인식가능</h4>
      <form>
        <label htmlFor="image" />
        <input
          id="image"
          placeholder="image"
          type="file"
          accept="image/jpeg"
          onChange={handleFileInputChange}
        />
      </form>
      <img
        style={{ width: "200px" }}
        src={state.base64URL}
        alt="유저가 첨부한 이미지"
      />
      {loading ? null : (
        <>
          <h3>
            결과 {result?.return_object.data.length} 개의 사물을 인지하였습니다.
          </h3>
          {result?.return_object.data.map((x, index) => (
            <div key={index}>
              <li>
                {x.confidence} 의 확률로 {x.class} 입니다.
              </li>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;

/* 컴퓨터 분야에서 쓰이는 Base 64 (베이스 육십사)란 8비트 이진 데이터(예를 들어 실행 파일이나, ZIP 파일 등)를 문자 코드에 영향을 받지 않는 공통 ASCII 영역의 문자들로만 이루어진 일련의 문자열로 바꾸는 인코딩 방식을 가리키는 개념이다.
원래 Base 64를 글자 그대로 번역하여 보면 64진법이란 뜻이다. 특별히 64진법이 컴퓨터에서 흥미로운 것은, 64가 2의 제곱수(64 = 26)이며, 2의 제곱수들에 기반한 진법들 중에서 화면에 표시되는 ASCII 문자들을 써서 표현할 수 있는 가장 큰 진법이기 때문이다. 즉, 다음 제곱수인 128진법에는 128개의 기호가 필요한데 화면에 표시되는 ASCII 문자들은 128개가 되지 않는다.
그런 까닭에 이 인코딩은 전자 메일을 통한 이진 데이터 전송 등에 많이 쓰이고 있다. Base 64에는 어떤 문자와 기호를 쓰느냐에 따라 여러 변종이 있지만, 잘 알려진 것은 모두 처음 62개는 알파벳 A-Z, a-z와 0-9를 사용하고 있으며 마지막 두 개를 어떤 기호를 쓰느냐의 차이만 있다. */
