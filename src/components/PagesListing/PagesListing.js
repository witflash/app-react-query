import { useQuery } from 'react-query';

function PagesListing() {
  const { data, isLoading } = useQuery('/pages');
  console.log('data: ', data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Pages Listing</h2>
      <div>
        <p>Pages</p>
      </div>
    </div>
  );
}

export default PagesListing;
