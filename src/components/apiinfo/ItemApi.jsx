export default function ItemApi({ title, apiUrl, description, ...props }) {
  return (
    <div class="flex w-full flex-row items-center text-white">
      <div class="m-1 flex flex-row items-center justify-center rounded-sm border-2 border-blue-400 bg-blue-400 px-6">
        <h4 class="w-auto  items-center p-0 text-2xl font-bold">{title}</h4>
      </div>

      <button
        type="button"
        class="btn btn-dark btn-sm m-2 w-full items-start overflow-hidden text-ellipsis text-start hover:cursor-default"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={apiUrl}
      >
        {apiUrl}
      </button>
      <h5 class="w-full items-start text-gray-400">{description}</h5>
      <button
        onClick={async () => await navigator.clipboard.writeText(apiUrl)}
        class="relative items-center text-white"
      >
        <div class="m-3 hover:cursor-pointer hover:text-blue-400 active:text-blue-800">
          {props.children}
        </div>
      </button>
    </div>
  );
}
