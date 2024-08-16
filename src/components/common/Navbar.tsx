import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>----------</div>
        <div>네브바입니다</div>
        <ul>
          <li>
            <Link href="/profile">
              <div>선수 목록</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div>메인</div>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <div>중고 거래</div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
