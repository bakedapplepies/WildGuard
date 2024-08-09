export type CategoryModel = {
  image: string;
  title: string;
};

export type MixModel = {
  image: string;
  title: string;
  color?: any;
};

export type RecentModel = {
  image: string;
};

export type GenreModel = {
  title: string;
  color: any;
  image: string;
};

export const CATEGORIES_DATA: CategoryModel[] = [
  {
    title: "Coffee & Jazz",
    image:
      "https://s3-alpha-sig.figma.com/img/a726/ea96/8e05c8f303c0764928a9866c53dac82c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxfiJyrULs38cRfF0eCJ82JriA7UPxsW3X1lSyrzKEU7fvQ2CuPcUoozg66qSESRMp2FZH98ZvVnS-b74j0k4KRnI4ypYSMt9Y3buz59ljnpMEClyJoxbbIPgLfkJ-dOiDPjyNkz2qPKapKMb8GlQxBrLqI8YsqGeBJhA3tHE3YQ15jjaSYlCHAcvuoqwuKD621JI85dMSPBIHXWEhtMwZcJkQTcktWHs3Pqn0e7G-UzlO4~smZazQFNzS8R21ggHNT-Nvgw1VwjNm1-NS6EcWEztM6qPBMAxGmC5eOi9ZqvL6EJ6gc3beq386d7QAnb5LMTjvFRX83RBfOiyu7jsg__",
  },
  {
    title: "Released",
    image:
      "https://s3-alpha-sig.figma.com/img/6961/e06e/96d71743b1c7fa5f30a6462c298baf03?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0-WGPgxY9QOLVP4yB~0cXyjEBj93LcnKWKCjM0U5ZMf3nV55XbCTYihKvW1eeZnoVNypL1pXBqNRySXMgnQ02jKaVQNM-bLAB9eSdkLWvLeE7ASY7TURg3GsqXOD0~WIqMZlOHcKMQn8Le~SB4C-qywWZcqKCFrCCb0rXWjFyaTuIi24gbrT6npio5I-WWFJ5sTv4MzegZmG-jJWCFU~S0qxMBC6tqZ9y9dTKbMngT0T73LuFxcWAeqWEXCQY0hcP9aoX0b5ovxYZPOOxeGZ0N5fHDddeCOVWHkw9MICZ-Idz4u7eYEGad3~0VAYdQ8jjj1o~Zypv5ioP8qVdFWFQ__",
  },
  {
    title: "Anything Goes",
    image:
      "https://s3-alpha-sig.figma.com/img/c43c/b536/abefbd6854c15840bb247a41b01a92a8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hix3xVsMJdZSVFUo50x2Qih8x0hyUQFCNibtG74~rnQ9kdLXDzh2NUyTr5URpUoobv5G9ETWmtjDgGUJZjbYDSlc~yJTQ7IqydNUx4J8v~LzPbU7ULCpTHbpWwz9mssrdd3nEIQ0hLW15nkeJnU1DFGA32BdbJ5UeiLfh7V9oejmwTjyw75CO5YadPoU-Pj4K1bkDKjV~jtHgYE0rIahdT9KZ4E0~1k3cLv-VGd6N6iwDu9KUwUKyAnaf-vdgfxvzsMT6-L7WweN9TmzcGUQdUgokDGJxu~1n6uDK4wMfhFS9P7xoNg3ID5sWbeKyvRAqTT4BulfbtY5iQZsq2UcUA__",
  },
  {
    title: "Anime OSTs",
    image:
      "https://s3-alpha-sig.figma.com/img/3241/a383/5ed7fe3938cd12d398bc15e0198ca304?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pr-AN0xBfolF17YON4o8XELZD9mAVz-xZox5zpd1MCON6JdvD5AHKM-ecC7cefQcWNrOEaCfza7THXeJK38GT6jamjLuvM0drsRXh55~E3qM85pG0b7e~3fRJ11ySAc2UW2~Yula5l61FyUYoME~G7MX82lgCaRHYillhaOJwXcWbibRZ-sSXO98QiHzAdkrZCMiBD~1kq7VbQOaS3Gfq1pfY5oJY3KZW3fpdMoiWnitTXONK95-IJQQn3dZndpVkvM7Ig~uvd~gKpVPB7Qn0Gix8CQ8EWnYvzQUG0bJGSB-h9PH9PXKddK-4vHyenPesOuu-5k1v14rW1PczSLbaw__",
  },
  {
    title: "Harry’s House",
    image:
      "https://s3-alpha-sig.figma.com/img/f0e7/77f9/9bc1c3ae372196b6ada20ce6aed34f05?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URp8a03KXVPt8zvxUK2jDMt3dKv88IO6HyHlghZ3elxAmXXy2a7ci6sSbFZNQYzoR6fg-XqfXpdiiBluqqHTbu3AU9qvSvuwkfVpivWYpS3UxfvLAXQaIm5syx2gOL0UguAtfbFNFVBJyUO9sp9XMNjCeFuTXOFuPjPTD-dyqhuGq3lhIFbMB0PNEj8aBZHV0EI2PfrZo6-rqmbtRSWsJfN~2XC51SfrRqIHE824zDP6o3Pl9id~L0hHBHavcH8BIF-lbqgmY7zjA-AxpnP9EN0kkSWIJuEmo12-O~DvIboK4AzkQLlD~CSarb3Gr7wLeTWAq4ZmA-QTu52VGH-80g__",
  },
  {
    title: "Lofi Beats",
    image:
      "https://s3-alpha-sig.figma.com/img/a8f4/694a/c32add88e9a73141fae5c07c79457b63?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcT-1~mkimpuQF~l696V6wlmanU3yRP620cfqRkXBpeOvnuhQI~y5YIiU24gt6We1N8e5L4O0yalN7nTc33NzsnWqTOGJQEbYOCmGK-60VvvOxxDmIYa7ypE-3yQKCf6yMkF4dtnjsV3izSyxDPHOWArCqSh~GFCWuw8lCTpMYXCCyzxo2T1ENjw2om-zFWr7R3BSUWvVbQoftpG8P0-H95zgJbj9KjXAigPD3PTOY4hp8n2Mlv4Um5c~zs6Is6u3tQLOeAWOjwqtKxBRrxkTpGkIjhJv4aI7TMHudT-AAQMcONynoFcwQF~CZQxPqaayyyMxaWQHssMC0gfSS1lXA__",
  },
];

export const MIXES_DATA: MixModel[] = [
  {
    title: "Pop Mix",
    image:
      "https://s3-alpha-sig.figma.com/img/79a0/71be/04a6a5e520fd3aeb0b77822b9131afc9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SVmhrAKBSrEHmZXqY9E0V0czjxXsYoVdbtawWg37Mpc1lHlQLrRXtbqOp5ZRh42kemPq8LYZSm72hrwqCKHO-NuJfQBfPUAN32zbTYNoXq4fXbP-5~U5eopP3ZG2jAAkob363eqRzj1YZKob~-yRS2qDhSTwtYuQMOqhkJH4CCds-W5O0YhcA4xUBpkUUY3YK0-LHBu7SWmANJ7wz0mJUd9YBS50jz1la84YdbhTrhFMNCmCTF1DN8dU~8EwKZazt4xapal1zaPsgh1GxYhS0HqiLayjKcDDZisgyLVvZuJQ2bxECPJBx~u~aCQjE2Cc-oPzFhkBc-rpaVUYwDFP2A__",
  },
  {
    title: "Chill Mix",
    image:
      "https://s3-alpha-sig.figma.com/img/e1c5/2083/2e4aac1e765771d8939eb92c0b8a43e1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZkV7dzBmdCtLsxcaQJ-VmSLqaQW41Ws9tYaICBnaLIbriXwijr00WwtepXI~l43FR5Ed8UUNLj2O-qwmtmaM8~bubskZiHWiNxBCrsBZF1C1twPHzPuAs9F5yQglpQQG9xOKotKsDlN89VVoO73SVcs-XFFuf-z0iT7XcFzOudu6Vak-XakstM55VTELplLOls84SY-lUpR~IAooKsyOpYoQ1uWAaOpFh3oJf9MzXk1zx3rpSyukFsJr~orelzvpm4PddaKFWmxizgfIe69pcy2b5Oi9bWWvKHNa16FDE1eft-uQWFPLJWbO0g8dgszFYJSVhyqZwwcAathekLhZg__",
    color: "yellow.200",
  },
  {
    title: "Kpop",
    image:
      "https://s3-alpha-sig.figma.com/img/13d1/ec54/35c7d14d8cc9730171b10bd1e2450072?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vge8IbBugtuRc53yENs6ry4IV2A-Oye~iMGH9Bxou-nwdxmHcRJRRO2WglzgmL0bEOCr8j0FrvnB702UsNHXYQo5hvMrnJ40JSTLc0s8RaPar2CV59mrIjYZjQKkAVqXwJAMEbqyZmgMwzqUn~sStcAcsu2uA4L4tN9eARQ-~AoCzSW0PSE0enumBOZiE72h3OY1UvEAygoSJ7g0~1IkHxW5OBj8hV0TraocH2SCYXpLcVxnekTJvzW6Rzxkm4LFhoVU12ZVOqUjcQ~9qHwoiLlqFMkBbjAPP2ujQJGJhfo21QIDo6U-SshPHXw5ofpP~ve90Lx1Ca7drM~~9FzUNw__",
    color: "green.300",
  },
];

export const RECENTS_DATA: RecentModel[] = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/647a/7bd6/67966f76dd0f089bb2bfe595f0278d43?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HaJJMqLMPbVFCV5oxkXkdoFg5Fl0Wz5O1hCYiIya-cRY5xyIGYC0XF9ijXGq6lrYTgbdpV-XA7sGzdcbMJTZeQ7m4tw~oTwDIAjQKNJLSEPXnpf1vN09JzurCUjNHyYdVS5ffLEas9rZ0z-9wgv4soBzF~cVAYQHvUkC8wD3Wn4HInfekr87iP6N9gifyqXi3wE-lHxPtPZ3zPYqOd2cZY-cAuC1sCPBGaTklS5ZWeru2p01mD8UE0jWTDt3KHmapDot3QLnzZONO8X4ptswrJ9dm9Vj0o8MeZTxuysuj85o55~Um9Al-4iEdZDmKljiaFeRGmQUJzfs7moBLvQkGw__",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/ba31/8236/6b869c34bf56c4007d8d0ecc9a72e53b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P7rDGQuV-eyTL4xRZrnOUEtQWDSUtAQQ~wNXAJj0nrDG7ohwvnLNCzldEUtgW3~u0-J3aWQ1nzCXSQtQqae-0if818-ZnWPM01uLiGgvdIWqarBlT~zP~bE29DVN3t1h8WjyqTiFJ5ZGz3046i2Rpoaiw-NaplEBkCVTicX8jtb2vPwaLwyad1P8U-H9u3Z77HXQS27jaxE9HMqHZcyG63woILKG35s7DhL5c17TxRHqpqUzE2WJAH3WoGO5wkDBn1YPMEi90irY6d8mfFhJzlf0QyrJkj7K9Vgz8hf1tyuahPB89BnFOYs03zwnhpnJN3wBcortoGson49fGxBASA__",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/1496/39ff/e504b53e84945aa988d41fb03766e947?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9rZaxAcJZ8SCZtzKkMLGv4uTwMZWafOnqYXRk4GzMGxO74wE5RmNMjk4Ps-jeQUvfv9b2jIAJ8TjBK9~N4bqqk1EglewHDRY-LhbM1bFUFWtpP9QKJF2636vmiIEdRI0hbbzOGsKt~DhGofDce8xH0nDFd88U~Ilp3uvURzQYrKkjQclstnxXMcWIHG6LNFtW--rCRVUC9EiePL5ItZOORMsOz0U3n4xPlO8moginfFrlTFzp3LZgdMuM-gtX8K9I8NgdhtE6tMpROxGdNqMi4vNz8gKxNylPY85Ce57eMjj4K-JDFpa~sn8lewVkdDSajvYlrp-NUWpFmcxzqYUQ__",
  },
];

export const TOP_GENRES: GenreModel[] = [
  {
    title: "Kpop",
    color: "green.600",
    image:
      "https://s3-alpha-sig.figma.com/img/25ce/d5f7/382cde768762cfffed20f11a0545e717?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n63e9TkM~Ek65IuIeoQTqF8-4MNas4rJrigpr~v57PMcckOOdXilEYOwDAuOJifufcUnEHPG~eZdQLCBD38tKKxaW6cGyUeCLsLBQ56cf7ay2OE~HeBYF6YOclLwUD1f0IXYNVRANmNs3UdFO7WulaF9taT8xEHBchQxlbSQ40mMtjHGXEuRqfxYK5VI8sHNag39wiuENR4eAD-O9kQhYXAgB8mi5vrRrbcqjmGTboff89qraLIPi2gdM4kv1kALJBnO9KU1RvAtNlBXmXVN646Nj7eUkH0IsuzdfCIKBkadvdjZGaaR-RJ~hvxwELHsI~HVHW7hyusByocjn6eMUQ__",
  },
  {
    title: "Kpop",
    color: "#CF25A0",
    image:
      "https://s3-alpha-sig.figma.com/img/6e8e/b339/e45591010bc83f3e93a4e928e981d0e9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qk27fsV7WClztCWzr23FCHbT7dUWCZKhsiKz5mnBXJfWFjljZjruXVsm1cdVIkKnNjpJ5PW63sjIHJEWPFkR0zHGQIwJZI49adF4KlXaH9LL3DCm6vR0Ua53-qrcz8L0JJOtRan3s9erAj4W8H9tX~jWmt8dWny3KHil3ZA0CrueGRxC5~~3q6VstgmWBsR9A~h8zt~313FiuahEXnOpm1qd0djTra9L1NgTxqYqH7~iy~yFwc5HOK3xfJxWzKtNGDXP1UZmcN7cX4yAA9ttkZbLP24kClBDT9QY1iMCB6sfxPADfqw9KhA91bsvfhiCMdVaF-pcsgVmtA1-FVcX5g__",
  },
  {
    title: "Kpop",
    color: "#4A558F",
    image:
      "https://s3-alpha-sig.figma.com/img/3a7d/1b49/58dd9aa70846e5a95bf1e7dcf55642b0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KsYYeFcHFdXbHyUju-M-FJe6MAmiA0ZLDV7Cb6EOmWiDRUhNU-MIc67rW2nNI3yOucT~XoGecRn9f2-Yo9DMxUEnaPwT8aXtRtbWWvKYFWVX~JWBbMCNvsdadxQ2AXoLHqvpa9n~JMbZGmVPYneW2LP9O-D4DmqWxAXxKIPHiJPXY2VWKSgCBQ0xGrzIIm0WSrLUITjCcFRR~FS~nOfxWgIpRRBtC6mouveg-mNcdmlVflfcKFLDcWVypVP7XOfhoXRlYvOEShHICWk16TKthKxE97ajnUSKLowCl-jQHoQHW51wTGs8pIpHEtdvHkyshXo0WxMUj4JWZR8i9vjnaw__",
  },
  {
    title: "Kpop",
    color: "#BD6220",
    image:
      "https://s3-alpha-sig.figma.com/img/d991/97de/0468134d55d22030ef8067831d7f6b2b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vnkji~HAa~c0AUDN8bCWY2mgZdjIJM7AiZTaakpJGT902Arn-PaQI1fr9lrxMCQSfUhDzUjQy~HAyiEbyWxmIqMRD2AOGdYCR1UABD~HK2brOvVdUMPxUxcYbe8ke~N0N7PFYfWUMoQtDT3AaAn9mh6ZqmXCjdWWERAGdGjz0~B8Dg3iIlWfhJswNWijnPsMW2wPAJOoKky7FCQ75jqnwgQGBSTww8gMEBNVdepFoiHKUiReNFq6AW-VYObpIdgxZ4UWEQgfWeb9pROQgzpmei4ETHvj~1C-x896UOOzVElN38Smebct9tqUzfCTl7pfhAxzq7GRYmtFqBKg564fxg__",
  },
];

export const BROWSE_ALL_GENRES: GenreModel[] = [
  {
    title: "Made for You",
    color: "#1E82AC",
    image:
      "https://s3-alpha-sig.figma.com/img/c68d/28fe/3638546aba6fd900c0f52dd2eaae4026?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b2eXIcgSt5vC8-ZgAAjdsIvkkYF3wTzDHWdlG7VnMy-bMV-mK7Kz9xiB9j8PS6ZF22itpJ0jecGigGYD7xYc~F6WDNues9wK6u73va07PgoHzmD0KMHL7nGLZB2YbF9BwWlEAu6jNElSX-6ECl5RuoY2j21FKTbYVyW4smJy09kV2rBRWzVBQHnyhJM8UGAXwXGX8opLWKxUruWJ5swXNKBpbHNmyav6~HddcI1jtLIVIruEpTXKFbN-ViVdJ-bozQaAbrVGk-Tt30D5sMU~CjMnvQELsR4pJoKwwlAc5OYZ5ztJbVr8J8UzelH1P~Jl-9O4oxxonVdWFbzVNhxWGw__",
  },
  {
    title: "RELEASED",
    color: "#76259C",
    image:
      "https://s3-alpha-sig.figma.com/img/6961/e06e/96d71743b1c7fa5f30a6462c298baf03?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0-WGPgxY9QOLVP4yB~0cXyjEBj93LcnKWKCjM0U5ZMf3nV55XbCTYihKvW1eeZnoVNypL1pXBqNRySXMgnQ02jKaVQNM-bLAB9eSdkLWvLeE7ASY7TURg3GsqXOD0~WIqMZlOHcKMQn8Le~SB4C-qywWZcqKCFrCCb0rXWjFyaTuIi24gbrT6npio5I-WWFJ5sTv4MzegZmG-jJWCFU~S0qxMBC6tqZ9y9dTKbMngT0T73LuFxcWAeqWEXCQY0hcP9aoX0b5ovxYZPOOxeGZ0N5fHDddeCOVWHkw9MICZ-Idz4u7eYEGad3~0VAYdQ8jjj1o~Zypv5ioP8qVdFWFQ__",
  },
  {
    title: "Music Chart",
    color: "#25319C",
    image:
      "https://s3-alpha-sig.figma.com/img/a113/3adf/6163e4f5ee57c7c2bc5ba9f7bc08ddae?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lXMdeX150eHdqCvKvU8utOCL9KhR~~yMchBSPJzg7Re-PKhSoOygKH8uk5PVtoK9r~u0LDpK~PwFMJiLUUzRV5IydStnaAQhVLUuK755pu4Z-4sBa~Rct4S0E791t1zRsHKlkIc7EDQLCqkc0y~2yAGaCwxsTOhruXokxWc1cXRN~od3vPVjkgZlAtkNgeshL3GzUjmL9jugKhwCi3LmRND47CDGsj7spRQriRLa9MPJkmUGaeQnG19gnl61C-i7vtjKkzKimrFf9hkaeEpkJoeEbNrPahDHcRMi67HRASByFPqIrlBA2j6dY8Fy9Kwq3vijAir~Gm7wzS9R-gZLow__",
  },
  {
    title: "Podcasts",
    color: "#9C2542",
    image:
      "https://s3-alpha-sig.figma.com/img/a6bf/d997/9deaf8d42c6aed22ad4ad01a29a22d45?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDYcC2DNxnp9TCDjjQefbQ9afKvWyW8fl4hv6gn76xgGlC6Vyb8DYYs~7qau7OYO2k8KIJ9uQJklfoexGWh8mMx3-UW6QJzLXmQPzjSywRiljbWftgYcfPmW1fQWmMyeg6AEdmSdA2fy9c6upAZ0D9HiKS8DGhiKkj6MNGtxCAhQsyaWQhQTfhTDYjPiF49nGhGTsFSoH2hUZuRhMOce~GuzHU0vpsusgnUfWpUthY~1rkKJv64HqArehYBcid7fuzkuHLO8t5xs6J-ARBJGWg6K13Dojy9tc00GCdcOV3odCXEhRailGX5aQBsX249fT3MIIfgrdCARkRJ78B5aPg__",
  },
  {
    title: "Bollywood",
    color: "#9C7425",
    image:
      "https://s3-alpha-sig.figma.com/img/965f/712f/5f4d2a4f579e26819b2c5a92bc703599?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OI-kTUEAtw09x45js89w38NIsh1LuRFLOAXGvpdBJ8Pa9~I8r92LbpTQGl02L-bUebwmtw3Z6yATcv2rpF-xzP-04ipoUhdXMZuvraLTXrROeY6AvIe4b1Ks6r0yf7ObenK7BTEV9p18YDj4BqAXDBfMQgaQra9NiMH8oCVmS4q5~vZyg2H6JmwasZSSzBQeivSIWfW2-U~gKw4j~dKDu8AACOWS4PaBmY6TkTqjxVGO4KRcpQ8xZOGJwSw-bnWlvZNxgK8N131sM17siT87~30qyayxaAch6ZU2qnLaNf0b5x32xh9iK-7AV1usNtWMFqHFyXtCM0koD00h9KIyKQ__",
  },
  {
    title: "Podcasts",
    color: "#479775",
    image:
      "https://s3-alpha-sig.figma.com/img/6e8e/b339/e45591010bc83f3e93a4e928e981d0e9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qk27fsV7WClztCWzr23FCHbT7dUWCZKhsiKz5mnBXJfWFjljZjruXVsm1cdVIkKnNjpJ5PW63sjIHJEWPFkR0zHGQIwJZI49adF4KlXaH9LL3DCm6vR0Ua53-qrcz8L0JJOtRan3s9erAj4W8H9tX~jWmt8dWny3KHil3ZA0CrueGRxC5~~3q6VstgmWBsR9A~h8zt~313FiuahEXnOpm1qd0djTra9L1NgTxqYqH7~iy~yFwc5HOK3xfJxWzKtNGDXP1UZmcN7cX4yAA9ttkZbLP24kClBDT9QY1iMCB6sfxPADfqw9KhA91bsvfhiCMdVaF-pcsgVmtA1-FVcX5g__",
  },
];
