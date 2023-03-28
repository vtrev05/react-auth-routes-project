import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

export const AppBar = ({ pages }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav>
      <span>React Router Auth</span>
      {pages?.map((page) => (
        <button
          key={page.label}
          onClick={() => handleNavigate(page.path)}
        >
          {page.label}
        </button>
      ))}
      {!!user && (
        <button key={"logout"} onClick={logout}> Logout </button>
      )}
    </nav>

  );
};