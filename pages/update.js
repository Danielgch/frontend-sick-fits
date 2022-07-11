import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage({ query }) {
  console.log('🚀 ~ file: update.js ~ line 4 ~ UpdatePage ~ query', query);
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
