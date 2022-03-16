function Form() {
return (
<div className="relative rounded-xl overflow-auto">

    <div className="max-w-sm mx-auto bg-white shadow py-5 px-6">

    <form>
      <div>
        <label htmlFor="username" className="block text-md font-medium text-slate-700">Username</label>
        <div className="mt-1">
          <input type="text" name="username" id="username" className="px-3 py-2 bg-slate border shadow-lg border-slate-300 placeholder-slate-400   focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm text-slate-700 focus:ring-1 " placeholder="An Alter Ego..." />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="email" className="block text-md font-medium text-slate-700">Email</label>
        <div className="mt-1">
          <input type="email" name="email" id="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm text-slate-700 focus:ring-1 " placeholder="you@example.com" />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="password" className="block text-md font-medium text-slate-700">Password</label>
        <div className="mt-1">
          <input type="password" name="password" id="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm text-slate-700 focus:ring-1 " placeholder="get crazy!!!" autoComplete="off" />
        </div>
      </div>
      <div className="mt-6 text-right">
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
          Save changes
        </button>
      </div>
    </form>
    </div>
</div>   
)
}

export default Form