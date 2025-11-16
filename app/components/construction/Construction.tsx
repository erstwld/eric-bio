import cone from "./cone.png"

export function Construction() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1>Page Under Construction</h1>
      <img  src={cone} alt="Construction Cone" className="py-10"/>
      <p>Sorry, this page is currently under construction. Please check back later!</p>
    </div>
  );
}
