import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import MainLayout from '../Common/Components/Layouts/Main.Layout';

export const Route = createRootRoute({
  component: RootPage,
  notFoundComponent: () => {
    return <NotFoundPage />;
  },
});

function NotFoundPage() {
  return (
    <MainLayout>
      <h1>Not Found</h1>
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>
    </MainLayout>
  );
}

function RootPage() {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
