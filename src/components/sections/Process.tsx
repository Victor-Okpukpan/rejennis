interface IProcess {
    id: string;
  }

export default function Process({id}: IProcess){
  return (
    <section id={id} className="h-screen">Process</section>
  )
}
