import Image from "next/image";

const Info = () => {
  return (
    <div className="w-full h-[30rem] flex justify-center border-b-2">
      <div className="flex items-center justify-center w-96 h-full ">
        <div className="relative w-80 h-80 rounded-full overflow-hidden">
          <Image src="/profile.JPG" fill alt="profile" sizes="100%"/>
        </div>
      </div>
      <div className="flex flex-col justify-center grow h-full p-4">
        <div>
          <h2 className="font-bold text-3xl text-indigo-800 mb-3">ABOUT ME.</h2>
          <div className="flex text-lg">
            <div className="font-bold space-y-1">
              <p>이름</p>
              <p>생년월일</p>
              <p>학력</p>
            </div>
            <div className="ml-10 space-y-1">
              <p>황서연</p>
              <p>2001.11.27</p>
              <p>인하대학교 경영학, 산업경영공학 (3.91/4.5)</p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-3xl text-indigo-800 mb-3">CONTACT</h2>
          <div className="flex text-lg">
            <div className="font-bold space-y-1">
              <p>Phone.</p>
              <p>Email.</p>
              <p>Github.</p>
              <p>Blog.</p>
            </div>
            <div className="ml-10 space-y-1">
              <p>010-8477-8820</p>
              <p>xitseo@naver.com</p>
              <p>https://github.com/winternotseason</p>
              <p>https://seodevelopment.tistory.com/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
