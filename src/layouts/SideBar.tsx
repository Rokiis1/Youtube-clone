import {
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  helpLinks,
  textLinks,
} from "../components/Links";

const SideBar = () => {
  return (
    <aside className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
      <ul className="flex-col border-b-2 border-gray-700">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" ? "bg-zinc-600" : ""
              }`}
              key={name}
            >
              <a className="flex items-center gap-5" href="#">
                {icon}
                <span className="text.sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex-col border-b-2 border-gray-700">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li className={`pl-6 py-3 hover:bg-zinc-600 `} key={name}>
              <a className="flex items-center gap-5" href="#">
                {icon}
                <span className="text.sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex-col border-b-2 border-gray-700">
        {subscriptionLinks.map(({ icon, name }) => {
          return (
            <li className={`pl-6 py-3 hover:bg-zinc-600 `} key={name}>
              <a className="flex items-center gap-5" href="#">
                {icon}
                <span className="text.sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex-col border-b-2 border-gray-700">
        {helpLinks.map(({ icon, name }) => {
          return (
            <li className={`pl-6 py-3 hover:bg-zinc-600 `} key={name}>
              <a className="flex items-center gap-5" href="#">
                {icon}
                <span className="text.sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className="px-4 text-sm text-zinc-400">&copy; 2022 Google</span>
      <br />
      <p className="px-4 pt-3 text-sm text-zinc-400">
        This clone is for education
      </p>
    </aside>
  );
};

export default SideBar;
