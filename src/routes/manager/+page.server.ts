export const prerender = true;

export interface PageData {
  downloadUrl: string | null;
}

const LATEST_RELEASES_URL =
  "https://api.github.com/repos/SnailyCAD-Manager/v2/releases/latest";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }): Promise<PageData> {
  const res = await fetch(LATEST_RELEASES_URL, {
    cache: "no-cache",
  });

  if (!res.ok) {
    return { downloadUrl: null };
  }

  const json = await res.json();

  if (json.assets) {
    return {
      downloadUrl: json.assets[0].browser_download_url,
    };
  }

  return {
    downloadUrl: null,
  };
}
