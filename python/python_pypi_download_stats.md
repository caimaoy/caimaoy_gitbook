# Python pypi download Stats

## 在 pypi 发布包之后如果统计下载量？

之前 pypi 是提供统计的，但是之后由于依稀原因，这个功能被取消了，具体可以查看 <https://mail.python.org/pipermail/distutils-sig/2013-May/020855.html>

原文如下：

> Hello!
>
> As you have have noticed the download counts on PyPI are no longer updating. Originally this was due to an issue with the script that processes these download counts. However I have now removed the download counts from the PyPI webui and their use via the API is considered deprecated.
>
> There are numerous reasons for their removal/deprecation some of which are:
>
> - Technically hard to make work with the new CDN
>   - The CDN is being donated to the PSF, and the donated tier does not offer any form of log access
>   - The work around for not having log access would greatly reduce the utility of the CDN
> - Highly inaccurate
>   - A number of things prevent the download counts from being inaccurate, some of which include:
>     - pip download cache
>     - Internal or unofficial mirrors
>     - Packages not hosted on PyPI (for comparisons sake)
>     - Mirrors or unofficial grab scripts causing inflated counts (Last I looked 25% of the downloads were from a known mirroring script).
> - Not particularly useful
>   - Just because a project has been downloaded a lot doesn't mean it's good
>   - Similarly just because a project hasn't been downloaded a lot doesn't mean it's bad
>
> In short because it's value is low for various reasons, and the tradeoffs required to make it work are high It has been not an effective use of resources.
>
> The API will continue to return values for it in order to not break scripts, however in the future all these values will be set to 0. The Web UI has been modified to no longer display it.
>
> ---
>
> Donald Stufft
> PGP: 0x6E3CBCE93372DCFA // 7C6B 7C5D 5E2B 6356 A926 F04F 6E3C BCE9 3372 DCFA

解决方案：  
<https://pypistats.org/>
