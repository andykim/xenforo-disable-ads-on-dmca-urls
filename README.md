# [Xenforo Addon] Disable adsense on DMCA urls
Xenforo addon to disable the Adsense on DMCA content

Example:

`<xf:if is="{{ !is_dmca($campaign, 'xs') }}">
    <xf:js>
        // Show ads
    </xf:js>
</xf:if>`
