import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();
  return (
    <>
      <div>ProfilePage {router ? router.query.id : "router.query.id??"}</div>
    </>
  );
};
export default ProfilePage;
