export default function CreatePost() {
  return (
    <section className="bg-zinc-800 flex flex-col px-4 pt-3 pb-2 rounded-lg w-full">
      <div className="flex gap-2 h-50% mb-2">
        <img
          src="https://randomuser.me/api/portraits/men/43.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
        <input
          type="text"
          className="focus:outline-none text-zinc-300 rounded-full w-full bg-zinc-700 px-4"
          placeholder="What's on your mind, John?"
        />
      </div>
      <hr className="border-t my-1 border-zinc-700" />

      <div className="grid grid-cols-3 font-semibold text-zinc-400 pb-1 text-sm">
        <div className="flex cursor-pointer items-center justify-center gap-2 hover:bg-zinc-700 p-2  rounded-lg">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png?_nc_eui2=AeFEwQOWK1LaHETrJmyP16j6VnUPE18ZZ-dWdQ8TXxln5zXJDKimoWBIb0KSNa3l2CcmlCT17kIVam3Q93h9brhq"
            alt=""
          />
          Live Video
        </div>
        <div className="flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-700 p-2  rounded-lg">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFyLvpIZHS2p25ceYkGIvDLPL4YoeGsw5I8vhih4azDks0GIatj0NZaHbYga8OrNbjtpkx70x3xKEdYuKOTDa9o"
            alt=""
          />
          Photo/video
        </div>
        <div className="flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-700 p-2  rounded-lg">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeE8by3AJAMmDHLjtIBIPUSDvPIN-OmHLJy88g346YcsnEg81hXX7IpN1tNAEjbtSx1X6hxRow5hcMdn37YTfdQu"
            alt=""
          />
          Feeling/activity
        </div>
      </div>
    </section>
  );
}
