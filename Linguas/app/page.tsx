import { Button } from "@/components/ui/button"//importa botao

export default function Home() {
  return(
    <div>
      <p className="text-green-500 font-bold text-xs">Ola Mundo!!</p>
      <Button size="lg" variant="destructive">Click aqui</Button>
    </div>
  )
}
