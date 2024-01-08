import IHeader from "./IHeader";
import { FiMenu, FiLogOut } from "react-icons/fi";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { onClearInfoUsuario } from "../../redux/state/autenticacion";

const Header = ({ titulo, nombreUsuario, cargoUsuario, logout }: IHeader) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleCerrarSesion = () => {
		// dispatch(onClearInfoUsuario([]));
		navigate(0);
		logout();
	};

	return (
		<div className='cabContenedor'>
			<div className='cabContenedorLogo'>
				<img
					src={require("./assets/image/logo_nombre.png")}
					alt='nombre de cosapi Mineria'
					className='cabNombreLogo'
				/>
				<img
					src={require("./assets/image/logo.png")}
					alt='Logo de cosapi Mineria'
					className='cabLogo'
				/>
			</div>
			<div className='cabContenedorTitulo'>
				<FiMenu className='CabTituloImagen' />
				<h3 className='CabTituloDescripcion'>{titulo}</h3>
			</div>
			<div className='cabContenedorPerfil'>
				<img
					src={require("./assets/image/SampleImage.jpg")}
					alt='Imagen de Perfil'
					className='cabImagenPerfil'
				/>
				<p className='cabNombreUsuario'>{nombreUsuario}</p>
				<p className='cabCargoUsuario'>{cargoUsuario}</p>
				<div className='cabContenedorDesplegable'>
					<div className='cabCerrarSesion' onClick={handleCerrarSesion}>
						<FiLogOut className='cabIcnCerrarSesion' />
						Cerrar Sesion
					</div>
				</div>
			</div>
		</div>
	);
};

Header.defaultProps = {
	titulo: "Titulo por defecto",
	nombreUsuario: "Usuario por defecto",
	cargoUsuario: "Cargo por defecto",
};
export default Header;
