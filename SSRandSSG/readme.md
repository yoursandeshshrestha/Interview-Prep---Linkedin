# Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js

**What is SSR and SSG?**

Server-Side Rendering (SSR) and Static Site Generation (SSG) are two different rendering methods offered by Next.js. SSR dynamically generates HTML on the server for every request, while SSG generates static HTML files at build time, which are served to clients.

**How Does SSR Work?**

SSR generates the HTML for each request at runtime, ensuring the user receives the latest content. The server fetches the necessary data, renders the HTML, and sends it to the client. This process improves SEO and initial load performance compared to client-side rendering.

- Key Function: `getServerSideProps()`
  `getServerSideProps()` fetches data on every request and passes it to the component for rendering.

```
export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return { props: { data } };
}

const Page = ({ data }) => (
    <div>
        <h1>{data.title}</h1>
    </div>
);

export default Page;
```

**How Does SSG Work?**

SSG pre-generates HTML at build time and serves it as static files. These files are reused across requests, leading to faster load times. SSG is ideal for pages where content doesn’t change frequently, like blogs or product pages.

- Key Functions: `getStaticProps()` and `getStaticPaths()`
  `getStaticProps()` is used to fetch data at build time, and `getStaticPaths()` helps generate paths for dynamic routes.

```
export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return { props: { data } };
}

const Page = ({ data }) => (
    <div>
        <h1>{data.title}</h1>
    </div>
);

export default Page;
```

**Key Points About SSR and SSG:**

1. SSR: Dynamic Content at Request Time:

- SSR is useful when the data for the page changes frequently or needs to be fresh for each request, such as dashboards or user-specific pages.

```
export async function getServerSideProps() {
    const data = await fetchData();
    return { props: { data } };
}
```

2. SSG: Pre-rendered Static Content:

- SSG is ideal for static pages that don’t change often, as it offers better performance by serving pre-rendered HTML.

```
export async function getStaticProps() {
    const data = await fetchData();
    return { props: { data } };
}
```

3. Hybrid Approach:

- Next.js allows combining SSR and SSG within the same application. You can have some pages statically generated (SSG) and others rendered on each request (SSR), depending on your data needs.

```
export async function getStaticProps() {
    const data = await fetchData();
    return { props: { data } };
}

export async function getServerSideProps() {
    const freshData = await fetchFreshData();
    return { props: { freshData } };
}
```

4. Performance and SEO Benefits:

- Both SSR and SSG improve SEO by serving fully rendered HTML to search engines. SSG typically offers faster performance due to pre-built pages, while SSR ensures the freshest content.

**Practical Use Cases:**

- SSR: Dynamic e-commerce product pages, user dashboards.
- SSG: Blogs, marketing landing pages, documentation.

**Conclusion:**

SSR and SSG in Next.js offer flexible rendering options tailored to the needs of your project. SSR ensures up-to-date content for every request, while SSG improves performance by serving pre-rendered static pages. Understanding when to use each approach is key to building fast, scalable web applications.
