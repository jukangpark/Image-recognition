# 이미지 인식 AI 기능 활용해보기.

## 소개

> 이미지 인식 기능 활용하기.

## published

<img src="https://user-images.githubusercontent.com/75718898/158535740-3b7c4768-8552-4d3e-b759-3e3f89454cd2.png" alt="image">
<a href="https://jukangpark.github.io/Image-recognition"> published web</a>

> deploy 환경에서는 작동하지 않음  
> 이유: api 가 http 를 이용하기 때문에 https 로 deploy 된 gh-pages 를 통해서는 데이터를 받아올 수 없음.
> 개선해야할 점.

## 참고자료

> 공공 인공지능 오픈 API·DATA 서비스 포털  
> https://aiopen.etri.re.kr/

## 객체검출 API 란?

> 이미지에서 사람, 자동차 등 일반적으로 나타나는 다양한 종류의 객체 카테고리를 분류하고 객체의 위치정보(박스 좌표)를  
> 감지할 수 있는 기술로 활용됩니다. 영상 데이터에서 다양한 형태의 객체를 인식하는 객체 인식기를 통해 객체 인식결과를  
> 제공합니다. 객체 검출 (Object Detection) API는 HTTP 기반의 REST API 인터페이스로 JSON 포맷 기반의입력  
> 및 출력을 지원하며 ETRI에서 제공하는 API Key 인증을 통해 사용할 수 있는 Open API 입니다.

### 지원하는 객체 카테고리 (총 80개)

> person, bicycle, car, motorcycle, airplane, bus, train, truck, boat, traffic light, fire hydrant, stop sign, parking meter, bench, bird, cat, dog, horse, sheep, cow, elephant, bear, zebra, giraffe, backpack, umbrella, handbag, tie, suitcase, frisbee, skis, snowboard, sports ball, kite, baseball bat, baseball glove, skateboard, surfboard, tennis racket, bottle, wine glass, cup, fork, knife, spoon, bowl, banana, apple, sandwich, orange, broccoli, carrot, hot dog, pizza, donut, cake, chair, couch, potted plant, bed, dining table, toilet, tv, laptop, mouse, remote, keyboard, cell phone, microwave, oven, toaster, sink, refrigerator, book, clock, vase, scissors, teddy, bear, hair drier, toothbrush

### 문제

> 이미지에서 Base64 로 인코딩 하고 난 다음 API 요청 할 때 문자열 수정하기  
> gh-pages 로 deploy 하였을 때 https:// 를 이용하기 때문에 https:// api 요청이 정상적으로 작동하지 않는점.
