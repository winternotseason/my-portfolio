import Link from "next/link";

const Info = () => {
  return (
    <div className="w-full pb-10 flex flex-col border-b-2 md:flex-row md:justify-around">
      <div className="flex justify-between w-full h-full">
        <div>
          <h2 className="font-bold text-2xl md:text-3xl text-indigo-800 mb-3 dark:text-indigo-600">
            ABOUT ME
          </h2>
          <div className="flex md:text-lg">
            <div className="font-bold space-y-1">
              <p>이름</p>
              <p>생년월일</p>
              <p>학력</p>
            </div>
            <div className="ml-10 space-y-1">
              <p>황서연</p>
              <p>2001.11.27</p>
              <p>인하대학교 경영학, 산업경영공학</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl md:text-3xl text-indigo-800 mb-3 dark:text-indigo-600">
            CONTACT
          </h2>
          <div className="flex md:text-lg">
            <div className="font-bold space-y-1">
              <p>Phone.</p>
              <p>Email.</p>
              <p>Github.</p>
              <p>Blog.</p>
            </div>
            <div className="ml-10 space-y-1">
              <p>010-8477-8820</p>
              <p>xitseo@naver.com</p>
              <p>
                <Link href="https://github.com/winternotseason" target="_blank">
                  https://github.com/winternotseason
                </Link>
              </p>
              <p>
                <Link href="https://seodevelopment.tistory.com" target="_blank">
                  https://seodevelopment.tistory.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
