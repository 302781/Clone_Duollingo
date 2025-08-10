//Criar nova pagina para os botoes

//Botao "Padrao" fica em branco
//Botao "Primario" fica em azul
//Botao "Esboço Primario" letra em azul fundo branco
import {Button} from "@/components/ui/button";
const ButtonsPage = () =>{
    return(
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button>Padrao</Button> 
            <Button variant="primary">Primario(a)</Button>
            <Button variant="primaryOutline">Esboço Primário</Button>
            <Button variant="segundary">Segundario(a)</Button>
            <Button variant="segundaryOutline">Esboço SEgundario</Button>
            <Button variant="danger">Perigo</Button>
            <Button variant="dangerOutline">Esboço Perigo</Button>
            <Button variant="Super">Super</Button>
            <Button variant="SuperOutline">Esboço Super</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="sidebar">Sidebar</Button>
            <Button variant="sidebarrOutline">Esboço Sidebar</Button>
        </div>
    );
};

export default ButtonsPage;