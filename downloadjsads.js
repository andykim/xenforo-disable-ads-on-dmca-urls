<xf:if is="{{ is_dmca($campaign, 'xs') }}">
            <xf:js>
                $(".adsbygoogle").each(function(){
                $(this).remove();
                });
            </xf:js>
            <xf:else />
            <xf:js>
                let _i = 0;
                let _ads = [
                '<div class="ads_center"><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-9641199877866022" data-ad-slot="9338149413"></ins></div>',
                '<div class="ads_center"><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-9641199877866022" data-ad-slot="2947877175"></ins></div>'
                ];
                $('[data-template="thread_view"] article.message, [data-template="xfrm_thread_view_type_resource"] article.message').each(function(){
                if(_i == 0){
                $(this).find('.message-content .message-body .bbWrapper').append('<div class="ads_center"><ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-9641199877866022" data-ad-slot="2729363638"></ins></div>');
                (adsbygoogle = window.adsbygoogle || []).push({});
                }else if(_i%3 == 0){
                const _random_ads = Math.floor(Math.random() * _ads.length);
                $(this).find('.message-content .message-body .bbWrapper').append(_ads[_random_ads]);
                (adsbygoogle = window.adsbygoogle || []).push({});
                }
                _i++;
                });

                let jsLoaded = false;
                let timeout = 3000;
                function downloadJSAtOnload() {
                if(!jsLoaded){
                var element = document.createElement("script");
                element.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9641199877866022";
                element.setAttribute('crossorigin', "anonymous");
                document.body.appendChild(element);
				(adsbygoogle = window.adsbygoogle || []).push({});
                }
                jsLoaded = true;
                }
                if (window.addEventListener){
                window.addEventListener("mousemove", downloadJSAtOnload, false);
                window.addEventListener("mousedown", downloadJSAtOnload, false);
                window.addEventListener("touchstart", downloadJSAtOnload, false);
                }else if (window.attachEvent){
                window.attachEvent("onload", downloadJSAtOnload);
                }else{
                window.onload = downloadJSAtOnload;
                }
                if(!jsLoaded){
                setTimeout(function(){downloadJSAtOnload}, timeout);
                }
            </xf:js>
        </xf:if>
