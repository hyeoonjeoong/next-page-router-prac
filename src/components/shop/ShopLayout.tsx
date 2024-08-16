interface Props {
  children: React.ReactNode;
}
const ShopLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div>중고샵이니까 장바구니나 뭐 이런거 추가해야겠찌</div>
    </>
  );
};
export default ShopLayout;
