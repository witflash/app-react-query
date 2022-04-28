import { useState } from 'react';

import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { ROUTE } from 'routes';
import { createPage, deletePage } from 'services/api';

import './PagesListing.scss';

function PagesListing() {
  const [pageName, setPageName] = useState('');
  const [pageDescription, setPageDescription] = useState('');

  const { data: pages, refetch, isLoading } = useQuery('/pages');
  const {
    mutate: handleCreatePage,
    isLoading: isPageCreating,
  } = useMutation(createPage, { onSuccess: refetch });
  const { mutate: handleDeletePage } = useMutation(deletePage, { onSuccess: refetch });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="PagesListing">
      <h2>Pages Listing</h2>
      <table className="PagesListing-table">
        <thead>
          <tr className="PagesListing-row">
            <th className="PagesListing-cell">ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page.id} className="PagesListing-row">
              <td>{page.id}</td>
              <td>{page.name}</td>
              <td>{page.description}</td>
              <td>
                <Link to={`${ROUTE.PAGES}/${page.id}`} className="PagesListing-action">Edit</Link>
                <button type="button" onClick={() => handleDeletePage(page.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="PagesListing-form">
        <div className="PagesListing-formControl">
          <label htmlFor="name">
            <span className="PagesListing-formLabel">
              Name
            </span>
            <input
              className="PagesListing-formInput"
              name="name"
              value={pageName}
              onChange={(event) => setPageName(event.target.value)}
            />
          </label>
        </div>
        <div className="PagesListing-formControl">
          <label htmlFor="description">
            <span className="PagesListing-formLabel">
              Description
            </span>
            <input
              className="PagesListing-formInput"
              name="description"
              value={pageDescription}
              onChange={(event) => setPageDescription(event.target.value)}
            />
          </label>
        </div>
        <div className="PagesListing-formControl">
          <button
            type="button"
            onClick={() => handleCreatePage({ name: pageName, description: pageDescription })}
            disabled={isPageCreating}
          >
            Add new page
          </button>
        </div>
      </div>
    </div>
  );
}

export default PagesListing;
