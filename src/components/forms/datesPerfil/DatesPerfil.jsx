import Images from '../../ui/Imag/Images';
import Pharagraps from '../../ui/Pharagraps/Pharagraps';
import { Titles } from '../../ui/Titles/Titles';
import './datesPerfil.css'

export function DatesPerfil(){
    return(
        <>
            <div className='cont-userp'>
                <div className='imgs-perfil'>
                    <Images customClass="portada-img" image="one.jpg" />
                    <Images customClass="user-img" image="Dluffy.jpg" />
                </div>
                <div>
                    <div>
                        <Titles customClass="name-p" text="Monkey D. Luffy" />
                        <Pharagraps customClass="carrera-p" text="Ing. Sistemas de la información" />
                        <Pharagraps customClass="ciudad-p" text="Chiapas, México" />
                    </div>
                    <div>
                        <Pharagraps customClass="temas-p" text="Intereses" />
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}