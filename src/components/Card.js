const Card = ({ data, ...props }) => {
  return (
    <div {...props} className="flex flex-col shadow-md">
      <div className="font-semibold font-sans text-center flex flex-col">
        <p className="">
          Electrodoméstico: <span>{data.fields.nombre}</span>
        </p>
        <p></p>
      </div>
      <img
        src={"https:" + data?.fields?.imagen?.fields?.file?.url}
        alt="Imagen-Pelicula"
        className="mx-auto w-48 "
      />
    </div>
  );
};
export default Card;
