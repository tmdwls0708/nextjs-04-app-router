/**
 * 병렬 라우팅은 Next.js에서 레이아웃에 @폴더명에서 '@'를 제외한 이름으로 넣어준다.
 */
const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
