<!DOCTYPE html>
<!-- saved from url=(0070)https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
  <link rel="dns-prefetch" href="https://github.githubassets.com/">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com/">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-hcN7jIRLOi6fUmQ9rgL+GH14ELQxOgnU/2lFZMM2wxFTGkch1FEaGuKMIn46nVxzLcoWG65x8JslZxWl2DL0Pw==" rel="stylesheet" href="./leaflet.wms_files/frameworks-85c37b8c844b3a2e9f52643dae02fe18.css">
  
    <link crossorigin="anonymous" media="all" integrity="sha512-IEI4SkusvrScXJ/HFJDTDON4/SaMjYEuLKShbaeNd3ary+aUE5EsIzvx7WVSIcUh7ZALgeBT74jeI32o85UiFw==" rel="stylesheet" href="./leaflet.wms_files/behaviors-2042384a4bacbeb49c5c9fc71490d30c.css">
    
    
    
    <link crossorigin="anonymous" media="all" integrity="sha512-zcUn3bwUsdR8EFY7qsbEqKAx2UsYtd+AOKV03mdzIai+6aSlRDZLfvKxFm9h6LPRdcNqWnRUIFzwHlQqVBBvBw==" rel="stylesheet" href="./leaflet.wms_files/github-cdc527ddbc14b1d47c10563baac6c4a8.css">

  <script crossorigin="anonymous" defer="defer" integrity="sha512-CzeY4A6TiG4fGZSWZU8FxmzFFmcQFoPpArF0hkH0/J/S7UL4eed/LKEXMQXfTwiG5yEJBI+9BdKG8KQJNbhcIQ==" type="application/javascript" src="./leaflet.wms_files/environment-0b3798e0.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-hj4gBCzfBV2jwA/7yKXddRVpCFofKW+wQVTp2TGzxjcPDvfVMXOnYo+yUjupKswUmrxEZps+xX+JM+xzO4RYaA==" type="application/javascript" src="./leaflet.wms_files/chunk-frameworks-863e2004.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-rAayX+tAGbFvAwJW7fDoX+NNhMtMEh/AERlttmVRsk3Vk4kl27vs8D6s8IEJs7dMixb+J1VNqDLcAjlssMguJw==" type="application/javascript" src="./leaflet.wms_files/chunk-vendor-ac06b25f.js.descarga"></script>
  
  <script crossorigin="anonymous" defer="defer" integrity="sha512-qPi5hh9n372trWzRp2OnsYbbL/ioCFrAcf8Udxayqw6iqHKrO4BJHGJPD2TMGE5qMJcu7craDDSucWJvCz6Ydw==" type="application/javascript" src="./leaflet.wms_files/behaviors-a8f8b986.js.descarga"></script>
  
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VuP/2HeHlwuxYb9sV0y9/hgN869dWIQDX2WZrvh4VAQjo6tb7PXzbBz0nOYROez0xFLxRc/u6sVU6fuYgcpN8w==" type="application/javascript" data-module-id="./chunk-animate-on-scroll.js" data-src="https://github.githubassets.com/assets/chunk-animate-on-scroll-56e3ffd8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ct3QiK2mvpg7zor9R2psdWnNMM2K32RU4RGRB/7yA5FyZ8H4iY6SNynXc7UaJqzBx6NaReg3GsWJPwW3kgAAig==" type="application/javascript" data-module-id="./chunk-codemirror.js" data-src="https://github.githubassets.com/assets/chunk-codemirror-72ddd088.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-9UuJ//O9hwCOI7MwzyVAJXn1D9B0WaQFktu5Qzw+7mg18URfaXXS7LsQVNirCGlgrmKe20UCtbj/4aGmw9Wk7g==" type="application/javascript" data-module-id="./chunk-color-modes.js" src="./leaflet.wms_files/chunk-color-modes-f54b89ff.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-zkYZSjUFqSifB+Lt76jclFMrfqpcPqevT801RZcoBNCZHRTBKcFrW9OyJoPOzKFv+fZVDRnqdqGsuIv5KOIgZg==" type="application/javascript" data-module-id="./chunk-contributions-spider-graph.js" data-src="https://github.githubassets.com/assets/chunk-contributions-spider-graph-ce46194a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-6j/oSF+kbW+yetNPvI684VzAu9pzug6Vj2h+3u1LdCuRhR4jnuiHZfeQKls3nxcT/S3H+oIt7FtigE/aeoj+gg==" type="application/javascript" data-module-id="./chunk-drag-drop.js" data-src="https://github.githubassets.com/assets/chunk-drag-drop-ea3fe848.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VSSd+Yzi2iMS+pibY6hD/WdypxAEdob5F2RMKxuKcAHS2EpFYJPeTXoVxt0NXg03tfj2dka2mEtHS+vjpYSaDw==" type="application/javascript" data-module-id="./chunk-edit-hook-secret-element.js" data-src="https://github.githubassets.com/assets/chunk-edit-hook-secret-element-55249df9.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-N+ziqJjVMfWiqeVHdayDHpNRlG5HsF+cgV+pFnMDoTJuvBzgw+ndsepe4NcKAxIS3WMvzMaQcYmd2vrIaoAJVg==" type="application/javascript" data-module-id="./chunk-edit.js" src="./leaflet.wms_files/chunk-edit-37ece2a8.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-aiqMIGGZGo8AQMjcoImKPMTsZVVRl6htCSY7BpRmpGPG/AF+Wq+P/Oj/dthWQOIk9cCNMPEas7O2zAR6oqn0tA==" type="application/javascript" data-module-id="./chunk-emoji-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-emoji-picker-element-6a2a8c20.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ejCT9r9E93nir+wK3PibZdMK0J3VXEkbwlgdnOnaUNoiJDI60BMtFt1QwjMU/rLXcjnH0xvgVFINGBFkzvTmRw==" type="application/javascript" data-module-id="./chunk-filter-input.js" data-src="https://github.githubassets.com/assets/chunk-filter-input-7a3093f6.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Z1wcyOFQHzyMSPqp5DLKrobr3DN2Q6Dz31cfPtw4b2vPs9PX0PrxyDXHpTbIlcZ9qT1M1BNAypHKKw8Lp6Yx/Q==" type="application/javascript" data-module-id="./chunk-insights-graph.js" data-src="https://github.githubassets.com/assets/chunk-insights-graph-675c1cc8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-4iRI95LO0kKcZLWUoOzqI6w8IVGppDVluR4dL7yyz8zgBu/7JAib0MkRN5LUVxXv0KIT6mQ2m5jbKa1NeZoD5A==" type="application/javascript" data-module-id="./chunk-invitations.js" data-src="https://github.githubassets.com/assets/chunk-invitations-e22448f7.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-S5FIOkadGN34UNgwHnVlWaGU6QTjnXIgIhNC1KiRoPIJ1lr3bm+RyU+ar06Dijh10mCX7Gi2+B2oMe8XYJpcHg==" type="application/javascript" data-module-id="./chunk-jump-to.js" data-src="https://github.githubassets.com/assets/chunk-jump-to-4b91483a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-0DSZHh/iD27pAOXl4AWcxPqgRsJAVr1M8SnaN4gKYH2ZplPywvL5oalqN4Qj03FsB5Ll0pytD5kiTMibgGq0BA==" type="application/javascript" data-module-id="./chunk-launch-code-element.js" data-src="https://github.githubassets.com/assets/chunk-launch-code-element-d034991e.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Lo0j1owPfYM0txt85KwGzF1PQJLvLFGbRJoASd5ZKMQAV9ZSDg5bVm5UWBAz7glGzw1pkiUD2bCMs2wqyf+CEA==" type="application/javascript" data-module-id="./chunk-notification-list-focus.js" src="./leaflet.wms_files/chunk-notification-list-focus-2e8d23d6.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ma0OOy3nj0c1cqBx0BkcmIFsLqcSZ+MIukQxyEFM/OWTzZpG+QMgOoWPAHZz43M6fyjAUG1jH6c/6LPiiKPCyw==" type="application/javascript" data-module-id="./chunk-profile-pins-element.js" data-src="https://github.githubassets.com/assets/chunk-profile-pins-element-99ad0e3b.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-/kPLzWIe41nxla5A+wcKKPIw4xiAsuITdjbXGVCycmUYnADfCids8FdV+TCA68gr4jAhKIws7flLpL12MoouBA==" type="application/javascript" data-module-id="./chunk-readme-toc-element.js" src="./leaflet.wms_files/chunk-readme-toc-element-fe43cbcd.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-F0E2A5YYSz+7eA/RyQ/vYtJzeK2sjNyyneVBqru/CPoRXGBiAcJ2tpN2MWLxkNCqirt88h/BMCAF/7YTZ2qZJA==" type="application/javascript" data-module-id="./chunk-ref-selector.js" src="./leaflet.wms_files/chunk-ref-selector-17413603.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Zii9oRdZ6q2QDNjL5A+me7jwJjMLvs1NiQNHmajUZnn4t9shcBDb4F8l/PQZW26eYfe5065oM7lIOSmbMinA7Q==" type="application/javascript" data-module-id="./chunk-responsive-underlinenav.js" src="./leaflet.wms_files/chunk-responsive-underlinenav-6628bda1.js.descarga"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-9WNXtB07IyWypiPmkuucspwog4mme9q5GKGMSgd7FI0DPimmg/pEw+aaAofFV1vuWMt9I8H5QpsVtlbHGg1YBA==" type="application/javascript" data-module-id="./chunk-runner-groups.js" data-src="https://github.githubassets.com/assets/chunk-runner-groups-f56357b4.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-fIq9Mn7jY/bHQXnsmh+VejpDnaO+d/FDxsp+4CuZtdNLrLuO+dQCjh+m6Yd8GCYD2Cy6DWbCEyM+mH2dkB2H9A==" type="application/javascript" data-module-id="./chunk-sortable-behavior.js" data-src="https://github.githubassets.com/assets/chunk-sortable-behavior-7c8abd32.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-WK8VXw3lfUQ/VRW0zlgKPhcMUqH0uTnB/KzePUPdZhCm/HpxfXXHKTGvj5C0Oex7+zbIM2ECzULbtTCT4ug3yg==" type="application/javascript" data-module-id="./chunk-toast.js" data-src="https://github.githubassets.com/assets/chunk-toast-58af155f.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vgHJEmEJxNmHucGbVY8bEUoOYo5/ZwpQ69rU8Dld89daWJ54uad9lNptxq32F8pnbHhdngw9lohNEbMbjmj5AQ==" type="application/javascript" data-module-id="./chunk-tweetsodium.js" data-src="https://github.githubassets.com/assets/chunk-tweetsodium-be01c912.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-a+Pr9qPUoA3j8O0EiWfWwxWH4ZiB1fweLkYrjYlvyy/SeJbcjR1B4UyYjypFb9kvoy7I2bwXU9ctjZInmlyBXg==" type="application/javascript" data-module-id="./chunk-user-status-submit.js" data-src="https://github.githubassets.com/assets/chunk-user-status-submit-6be3ebf6.js"></script>
  
  <script crossorigin="anonymous" defer="defer" integrity="sha512-dqwQ2mKl6fhzCTybU6VQghZwd/g8ylgtLAcfPdKZEerKDlfyw0pZ1Yj5DYJCZ7RsRIL1w1sPgoq8hN2isVsxcA==" type="application/javascript" src="./leaflet.wms_files/codespaces-76ac10da.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" integrity="sha512-+ENy3aqRqLrVzimPscwGcF8nAVSMcGWs7rqA/7B8Cj0ZpfA4oK5QzghzMMDVTM3pVEKtOYNdnzl3+N1/crdv+g==" type="application/javascript" src="./leaflet.wms_files/repositories-f84372dd.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" integrity="sha512-VdDnT4MPoFuFNTXGAwYJA7c5Doy8ZNOhM9PaJ0gPsIvXjFpHu9bqjLP6BLa/iRaLY4BXvoo1lQBlQi80vb3WzQ==" type="application/javascript" src="./leaflet.wms_files/topic-suggestions-55d0e74f.js.descarga"></script>

  <meta name="viewport" content="width=device-width">
  
  <title>leaflet.wms/leaflet.wms.js at gh-pages · heigeo/leaflet.wms · GitHub</title>
    <meta name="description" content="A Leaflet plugin for working with Web Map services, providing: single-tile/untiled/nontiled layers, shared WMS sources, and GetFeatureInfo-powered identify. - heigeo/leaflet.wms">
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905">
    <meta name="twitter:image:src" content="https://opengraph.githubassets.com/1cbcc3b62bfb75bed0b5246b3329faa68448a11df6f8933e3b211c0ee1a24c53/heigeo/leaflet.wms"><meta name="twitter:site" content="@github"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="heigeo/leaflet.wms"><meta name="twitter:description" content="A Leaflet plugin for working with Web Map services, providing: single-tile/untiled/nontiled layers, shared WMS sources, and GetFeatureInfo-powered identify. - heigeo/leaflet.wms">
    <meta property="og:image" content="https://opengraph.githubassets.com/1cbcc3b62bfb75bed0b5246b3329faa68448a11df6f8933e3b211c0ee1a24c53/heigeo/leaflet.wms"><meta property="og:image:alt" content="A Leaflet plugin for working with Web Map services, providing: single-tile/untiled/nontiled layers, shared WMS sources, and GetFeatureInfo-powered identify. - heigeo/leaflet.wms"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:site_name" content="GitHub"><meta property="og:type" content="object"><meta property="og:title" content="heigeo/leaflet.wms"><meta property="og:url" content="https://github.com/heigeo/leaflet.wms"><meta property="og:description" content="A Leaflet plugin for working with Web Map services, providing: single-tile/untiled/nontiled layers, shared WMS sources, and GetFeatureInfo-powered identify. - heigeo/leaflet.wms">



    

  <link rel="assets" href="https://github.githubassets.com/">
  

  

    


  

  

  

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com"><meta name="octolytics-app-id" content="github"><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event">

  

  



  <meta name="optimizely-datafile" content="{&quot;version&quot;: &quot;4&quot;, &quot;rollouts&quot;: [], &quot;typedAudiences&quot;: [], &quot;anonymizeIP&quot;: true, &quot;projectId&quot;: &quot;16737760170&quot;, &quot;variables&quot;: [], &quot;featureFlags&quot;: [], &quot;experiments&quot;: [{&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20106410318&quot;, &quot;key&quot;: &quot;en&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20122000362&quot;, &quot;key&quot;: &quot;ko&quot;}], &quot;id&quot;: &quot;20121990335&quot;, &quot;key&quot;: &quot;ko_homepage_translation&quot;, &quot;layerId&quot;: &quot;20100420349&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20106410318&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20122000362&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20227754799&quot;, &quot;key&quot;: &quot;control&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20233267869&quot;, &quot;key&quot;: &quot;treatment&quot;}], &quot;id&quot;: &quot;20194668672&quot;, &quot;key&quot;: &quot;recommended_plan_in_signup&quot;, &quot;layerId&quot;: &quot;20231804245&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20233267869&quot;, &quot;endOfRange&quot;: 2500}, {&quot;entityId&quot;: &quot;&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20227754799&quot;, &quot;endOfRange&quot;: 7500}, {&quot;entityId&quot;: &quot;&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {&quot;d0c8cbf56b61c99517936207d280de0c&quot;: &quot;treatment&quot;}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20233300304&quot;, &quot;key&quot;: &quot;launch_code_variation&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20227370325&quot;, &quot;key&quot;: &quot;control&quot;}], &quot;id&quot;: &quot;20206000276&quot;, &quot;key&quot;: &quot;launch_code_verification&quot;, &quot;layerId&quot;: &quot;20233240262&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20233300304&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20233300304&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {}}, {&quot;status&quot;: &quot;Running&quot;, &quot;audienceIds&quot;: [], &quot;variations&quot;: [{&quot;variables&quot;: [], &quot;id&quot;: &quot;20236992340&quot;, &quot;key&quot;: &quot;usd&quot;}, {&quot;variables&quot;: [], &quot;id&quot;: &quot;20184442182&quot;, &quot;key&quot;: &quot;localized_currency&quot;}], &quot;id&quot;: &quot;20233233507&quot;, &quot;key&quot;: &quot;local_currency_pricing&quot;, &quot;layerId&quot;: &quot;20212472765&quot;, &quot;trafficAllocation&quot;: [{&quot;entityId&quot;: &quot;20184442182&quot;, &quot;endOfRange&quot;: 5000}, {&quot;entityId&quot;: &quot;20236992340&quot;, &quot;endOfRange&quot;: 10000}], &quot;forcedVariations&quot;: {&quot;667685045.1617740930&quot;: &quot;localized_currency&quot;}}], &quot;audiences&quot;: [{&quot;conditions&quot;: &quot;[\&quot;or\&quot;, {\&quot;match\&quot;: \&quot;exact\&quot;, \&quot;name\&quot;: \&quot;$opt_dummy_attribute\&quot;, \&quot;type\&quot;: \&quot;custom_attribute\&quot;, \&quot;value\&quot;: \&quot;$opt_dummy_value\&quot;}]&quot;, &quot;id&quot;: &quot;$opt_dummy_audience&quot;, &quot;name&quot;: &quot;Optimizely-Generated Audience for Backwards Compatibility&quot;}], &quot;groups&quot;: [], &quot;attributes&quot;: [{&quot;id&quot;: &quot;16822470375&quot;, &quot;key&quot;: &quot;user_id&quot;}, {&quot;id&quot;: &quot;17143601254&quot;, &quot;key&quot;: &quot;spammy&quot;}, {&quot;id&quot;: &quot;18175660309&quot;, &quot;key&quot;: &quot;organization_plan&quot;}, {&quot;id&quot;: &quot;18813001570&quot;, &quot;key&quot;: &quot;is_logged_in&quot;}, {&quot;id&quot;: &quot;19073851829&quot;, &quot;key&quot;: &quot;geo&quot;}, {&quot;id&quot;: &quot;20175462351&quot;, &quot;key&quot;: &quot;requestedCurrency&quot;}], &quot;botFiltering&quot;: false, &quot;accountId&quot;: &quot;16737760170&quot;, &quot;events&quot;: [{&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;17911811441&quot;, &quot;key&quot;: &quot;hydro_click.dashboard.teacher_toolbox_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18124116703&quot;, &quot;key&quot;: &quot;submit.organizations.complete_sign_up&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18145892387&quot;, &quot;key&quot;: &quot;no_metric.tracked_outside_of_optimizely&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18178755568&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.add_repo&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18180553241&quot;, &quot;key&quot;: &quot;submit.repository_imports.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18186103728&quot;, &quot;key&quot;: &quot;click.help.learn_more_about_repository_creation&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18188530140&quot;, &quot;key&quot;: &quot;test_event.do_not_use_in_production&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18191963644&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.transfer_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18195612788&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.import_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18210945499&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.invite_members&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18211063248&quot;, &quot;key&quot;: &quot;click.empty_org_repo_cta.create_repository&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18215721889&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.update_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18224360785&quot;, &quot;key&quot;: &quot;click.org_onboarding_checklist.dismiss&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18234832286&quot;, &quot;key&quot;: &quot;submit.organization_activation.complete&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18252392383&quot;, &quot;key&quot;: &quot;submit.org_repository.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18257551537&quot;, &quot;key&quot;: &quot;submit.org_member_invitation.create&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18259522260&quot;, &quot;key&quot;: &quot;submit.organization_profile.update&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18564603625&quot;, &quot;key&quot;: &quot;view.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18568612016&quot;, &quot;key&quot;: &quot;click.classroom_sign_in_click&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18572592540&quot;, &quot;key&quot;: &quot;view.classroom_name&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18574203855&quot;, &quot;key&quot;: &quot;click.classroom_create_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18582053415&quot;, &quot;key&quot;: &quot;click.classroom_select_organization&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18589463420&quot;, &quot;key&quot;: &quot;click.classroom_create_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591323364&quot;, &quot;key&quot;: &quot;click.classroom_create_first_classroom&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18591652321&quot;, &quot;key&quot;: &quot;click.classroom_grant_access&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;18607131425&quot;, &quot;key&quot;: &quot;view.classroom_creation&quot;}, {&quot;experimentIds&quot;: [&quot;20194668672&quot;], &quot;id&quot;: &quot;18831680583&quot;, &quot;key&quot;: &quot;upgrade_account_plan&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19064064515&quot;, &quot;key&quot;: &quot;click.signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19075373687&quot;, &quot;key&quot;: &quot;click.view_account_billing_page&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19077355841&quot;, &quot;key&quot;: &quot;click.dismiss_signup_prompt&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19079713938&quot;, &quot;key&quot;: &quot;click.contact_sales&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19120963070&quot;, &quot;key&quot;: &quot;click.compare_account_plans&quot;}, {&quot;experimentIds&quot;: [&quot;20233233507&quot;], &quot;id&quot;: &quot;19151690317&quot;, &quot;key&quot;: &quot;click.upgrade_account_cta&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19424193129&quot;, &quot;key&quot;: &quot;click.open_account_switcher&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19520330825&quot;, &quot;key&quot;: &quot;click.visit_account_profile&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19540970635&quot;, &quot;key&quot;: &quot;click.switch_account_context&quot;}, {&quot;experimentIds&quot;: [&quot;20121990335&quot;], &quot;id&quot;: &quot;19730198868&quot;, &quot;key&quot;: &quot;submit.homepage_signup&quot;}, {&quot;experimentIds&quot;: [&quot;20121990335&quot;], &quot;id&quot;: &quot;19820830627&quot;, &quot;key&quot;: &quot;click.homepage_signup&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;19988571001&quot;, &quot;key&quot;: &quot;click.create_enterprise_trial&quot;}, {&quot;experimentIds&quot;: [&quot;20233233507&quot;], &quot;id&quot;: &quot;20036538294&quot;, &quot;key&quot;: &quot;click.create_organization_team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20040653299&quot;, &quot;key&quot;: &quot;click.input_enterprise_trial_form&quot;}, {&quot;experimentIds&quot;: [&quot;20233233507&quot;], &quot;id&quot;: &quot;20062030003&quot;, &quot;key&quot;: &quot;click.continue_with_team&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20068947153&quot;, &quot;key&quot;: &quot;click.create_organization_free&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20086636658&quot;, &quot;key&quot;: &quot;click.signup_continue.username&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20091648988&quot;, &quot;key&quot;: &quot;click.signup_continue.create_account&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20103637615&quot;, &quot;key&quot;: &quot;click.signup_continue.email&quot;}, {&quot;experimentIds&quot;: [], &quot;id&quot;: &quot;20111574253&quot;, &quot;key&quot;: &quot;click.signup_continue.password&quot;}, {&quot;experimentIds&quot;: [&quot;20233233507&quot;], &quot;id&quot;: &quot;20120044111&quot;, &quot;key&quot;: &quot;view.pricing_page&quot;}, {&quot;experimentIds&quot;: [&quot;20121990335&quot;, &quot;20233233507&quot;], &quot;id&quot;: &quot;20152062109&quot;, &quot;key&quot;: &quot;submit.create_account&quot;}, {&quot;experimentIds&quot;: [&quot;20233233507&quot;], &quot;id&quot;: &quot;20165800992&quot;, &quot;key&quot;: &quot;submit.upgrade_payment_form&quot;}, {&quot;experimentIds&quot;: [&quot;20233233507&quot;], &quot;id&quot;: &quot;20171520319&quot;, &quot;key&quot;: &quot;submit.create_organization&quot;}, {&quot;experimentIds&quot;: [&quot;20194668672&quot;], &quot;id&quot;: &quot;20222645674&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.discuss_your_needs&quot;}, {&quot;experimentIds&quot;: [&quot;20206000276&quot;], &quot;id&quot;: &quot;20227443657&quot;, &quot;key&quot;: &quot;submit.verify_primary_user_email&quot;}, {&quot;experimentIds&quot;: [&quot;20194668672&quot;], &quot;id&quot;: &quot;20234607160&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.try_enterprise&quot;}, {&quot;experimentIds&quot;: [&quot;20194668672&quot;], &quot;id&quot;: &quot;20238175784&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.team&quot;}, {&quot;experimentIds&quot;: [&quot;20194668672&quot;], &quot;id&quot;: &quot;20239847212&quot;, &quot;key&quot;: &quot;click.recommended_plan_in_signup.continue_free&quot;}, {&quot;experimentIds&quot;: [&quot;20194668672&quot;], &quot;id&quot;: &quot;20251097193&quot;, &quot;key&quot;: &quot;recommended_plan&quot;}], &quot;revision&quot;: &quot;686&quot;}">
  <!-- To prevent page flashing, the optimizely JS needs to be loaded in the
    <head> tag before the DOM renders -->
  <script crossorigin="anonymous" defer="defer" integrity="sha512-yDmmCGyENqEePvF9X9A4omxWCNcbS6qK2h8HZPdnvXd02Vzhtqd0zRd/pgTgqQ/xOA02F3H225VpJvDXrnfNbA==" type="application/javascript" src="./leaflet.wms_files/optimizely-c839a608.js.descarga"></script>



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">


      <meta name="expected-hostname" content="github.com">


    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS,AUTOCOMPLETE_EMOJIS_IN_MARKDOWN_EDITOR,ACTIONS_CONCURRENCY_UI">

  <meta http-equiv="x-pjax-version" content="a04b589afd3cddd9f7e76436f141090a028ee44b25a7a5e267b207efaa722a56">
  

    
  <meta name="go-import" content="github.com/heigeo/leaflet.wms git https://github.com/heigeo/leaflet.wms.git">

  <meta name="octolytics-dimension-user_id" content="4005772"><meta name="octolytics-dimension-user_login" content="heigeo"><meta name="octolytics-dimension-repository_id" content="24774804"><meta name="octolytics-dimension-repository_nwo" content="heigeo/leaflet.wms"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="24774804"><meta name="octolytics-dimension-repository_network_root_nwo" content="heigeo/leaflet.wms">



    


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="light dark">


  <link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials">

<meta name="enabled-homepage-translation-languages" content="ko">

  <meta name="selected-link" value="repo_source" data-pjax-transient=""><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient=""><meta name="request-id" content="249D:4B8B:1ADCCF:2C6AF9:60B00E05" data-pjax-transient=""><meta name="html-safe-nonce" content="39909d40b9bf2c21326247111d89b8ed973696ce83a79d1940b1758b692a88a2" data-pjax-transient=""><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9oZWlnZW8vbGVhZmxldC53bXMvYmxvYi9naC1wYWdlcy9zcmMvbGVhZmxldC53bXMuanMiLCJyZXF1ZXN0X2lkIjoiMjQ5RDo0QjhCOjFBRENDRjoyQzZBRjk6NjBCMDBFMDUiLCJ2aXNpdG9yX2lkIjoiNjg5ODA1MjgzNDMzMDYzOTQxNiIsInJlZ2lvbl9lZGdlIjoiaWFkIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient=""><meta name="visitor-hmac" content="62eb68649d73ac296c1a98107d8ae6ee6d52f118a1ca9b63c434a2a742bf6b35" data-pjax-transient=""><meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient=""><meta name="hovercard-subject-tag" content="repository:24774804" data-pjax-transient=""><link rel="canonical" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" data-pjax-transient=""><script type="application/javascript" src="./leaflet.wms_files/diffs-9c5fa309.js.descarga"></script></head>

  <body class="logged-out env-production page-responsive intent-mouse" style="word-wrap: break-word;">
    

    <div class="position-relative js-header-wrapper ">
      <a href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#start-of-content" class="px-2 py-4 color-bg-info-inverse color-text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader width-full js-pjax-loader-bar Progress position-fixed">
    <span style="background-color: rgb(121, 184, 255); width: 100%; transition: width 0.4s ease 0s;" data-view-component="true" class="Progress-item progress-pjax-loader-bar"></span>
</span>      
      


        
            <header class="Header-old header-logged-out js-details-container Details position-relative f4 py-2" role="banner">
  <div class="container-xl d-lg-flex flex-items-center p-responsive">
    <div class="d-flex flex-justify-between flex-items-center">
        <a class="mr-4" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
          <svg height="32" class="octicon octicon-mark-github color-text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>

          <div class="d-lg-none css-truncate css-truncate-target width-fit p-2">
            

          </div>

        <div class="d-flex flex-items-center">
              <nux-signup-candidates data-attribute-name="href" data-candidate-url="/join_next?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&amp;source=header-repo" data-action="loaded:nux-signup-candidates#determineSignupAction" data-catalyst="" data-form-method="">
                <a href="https://github.com/join?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&amp;source=header-repo" class="d-inline-block d-lg-none f5 color-text-white no-underline border color-border-tertiary rounded-2 px-2 py-1 mr-3 mr-sm-5" data-target="nux-signup-candidates.signupAction" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="b1bda1929263abfbf9f71c13202ab9ac8d986ba870475ba6bd3b5e748458d106">
                  Sign&nbsp;up
                </a>
              </nux-signup-candidates>

          <button class="btn-link d-lg-none mt-1 js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars color-text-white" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
          </button>
        </div>
    </div>

    <div class="HeaderMenu HeaderMenu--logged-out position-fixed top-0 right-0 bottom-0 height-fit position-lg-relative d-lg-flex flex-justify-between flex-items-center flex-auto">
      <div class="d-flex d-lg-none flex-justify-end border-bottom color-bg-secondary p-3">
        <button class="btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <svg height="24" class="octicon octicon-x color-text-secondary" viewBox="0 0 24 24" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"></path></svg>
        </button>
      </div>

        <nav class="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" aria-label="Global">
          <ul class="d-lg-flex list-style-none">
              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Why GitHub?
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>
                  <div class="dropdown-menu flex-auto rounded px-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="https://github.com/features" class="py-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Features">Features <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a>
                    <ul class="list-style-none f5 pb-3">
                        <li class="edge-item-fix"><a href="https://github.com/mobile" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Mobile <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/features/actions" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Actions <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/features/codespaces" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Codespaces <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/features/packages" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Packages <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/features/security" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Security <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/features/code-review/" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Code review <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/features/project-management/" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Project management <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/features/integrations" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">Integrations <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="https://github.com/sponsors" class="py-2 lh-condensed-ultra d-block no-underline Link--primary no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Sponsors">GitHub Sponsors <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://github.com/customer-stories" class="py-2 lh-condensed-ultra d-block no-underline Link--primary no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Customer stories">Customer stories<span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="https://github.com/team" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Team">Team</a>
              </li>
              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="https://github.com/enterprise" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Enterprise">Enterprise</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Explore
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                      <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded px-0 pt-2 pb-0 mt-0 pb-4 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="https://github.com/explore" class="py-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Explore">Explore GitHub <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                    </ul>

                    <h4 class="color-text-tertiary text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Learn and contribute</h4>
                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="https://github.com/topics" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Topics">Topics <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                        <li class="edge-item-fix"><a href="https://github.com/collections" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Collections">Collections <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://github.com/trending" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Trending">Trending <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://lab.github.com/" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Learning lab">Learning Lab <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://opensource.guide/" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Open source guides">Open source guides <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                    </ul>

                    <h4 class="color-text-tertiary text-normal text-mono f5 mb-2 border-lg-top pt-lg-3">Connect with others</h4>
                    <ul class="list-style-none mb-0">
                      <li class="edge-item-fix"><a href="https://github.com/readme" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover">The ReadME Project <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://github.com/events" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Events">Events <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://github.community/" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Community forum">Community forum <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://education.github.com/" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to GitHub Education">GitHub Education <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://stars.github.com/" class="py-2 pb-0 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to GitHub Stars Program">GitHub Stars program <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>

              <li class="border-bottom border-lg-bottom-0 mr-0 mr-lg-3">
                <a href="https://github.com/marketplace" class="HeaderMenu-link no-underline py-3 d-block d-lg-inline-block" data-ga-click="(Logged out) Header, go to Marketplace">Marketplace</a>
              </li>

              <li class="d-block d-lg-flex flex-lg-nowrap flex-lg-items-center border-bottom border-lg-bottom-0 mr-0 mr-lg-3 edge-item-fix position-relative flex-wrap flex-justify-between d-flex flex-items-center ">
                <details class="HeaderMenu-details details-overlay details-reset width-full">
                  <summary class="HeaderMenu-summary HeaderMenu-link px-0 py-3 border-0 no-wrap d-block d-lg-inline-block">
                    Pricing
                    <svg x="0px" y="0px" viewBox="0 0 14 8" xml:space="preserve" fill="none" class="icon-chevon-down-mktg position-absolute position-lg-relative">
                       <path d="M1,1l6.2,6L13,1"></path>
                    </svg>
                  </summary>

                  <div class="dropdown-menu flex-auto rounded px-0 pt-2 pb-4 mt-0 p-lg-4 position-relative position-lg-absolute left-0 left-lg-n4">
                    <a href="https://github.com/pricing" class="pb-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Pricing">Plans <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a>

                    <ul class="list-style-none mb-3">
                      <li class="edge-item-fix"><a href="https://github.com/pricing#feature-comparison" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Compare plans">Compare plans <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                      <li class="edge-item-fix"><a href="https://enterprise.github.com/contact" class="py-2 lh-condensed-ultra d-block Link--secondary no-underline f5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Contact Sales">Contact Sales <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                    </ul>

                    <ul class="list-style-none mb-0 border-lg-top pt-lg-3">
                      <li class="edge-item-fix"><a href="https://education.github.com/" class="py-2 pb-0 lh-condensed-ultra d-block no-underline Link--primary no-underline h5 Bump-link--hover" data-ga-click="(Logged out) Header, go to Education">Education <span class="Bump-link-symbol float-right text-normal color-text-tertiary pr-3">→</span></a></li>
                    </ul>
                  </div>
                </details>
              </li>
          </ul>
        </nav>

      <div class="d-lg-flex flex-items-center px-3 px-lg-0 text-center text-lg-left">
          <div class="d-lg-flex min-width-0 mb-3 mb-lg-0">
            
  <div class="header-search flex-auto js-site-search position-relative flex-self-stretch flex-md-self-auto mb-3 mb-md-0 mr-0 mr-md-3 scoped-search site-scoped-search js-jump-to" role="combobox" aria-owns="jump-to-results" aria-label="Search or jump to" aria-haspopup="listbox" aria-expanded="false">
    <div class="position-relative">
      <!-- '"` --><!-- </textarea></xmp> --><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="24774804" data-scoped-search-url="/heigeo/leaflet.wms/search" data-owner-scoped-search-url="/orgs/heigeo/search" data-unscoped-search-url="/search" action="https://github.com/heigeo/leaflet.wms/search" accept-charset="UTF-8" method="get">
        <label class="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center">
          <input type="text" class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable" data-hotkey="s,/" name="q" value="" placeholder="Search" data-unscoped-placeholder="Search GitHub" data-scoped-placeholder="Search" autocapitalize="off" aria-autocomplete="list" aria-controls="jump-to-results" aria-label="Search" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" spellcheck="false" autocomplete="off">
          <input type="hidden" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" value="8uF99TIC3k4VWhC+8ADh2Iv0VMiDkV1ET9oTWqOPTwqbS04PzfYPebmgRTZ9qxoitSfYTMj9DF6mmpyVaWbRoQ==">
          <input type="hidden" class="js-site-search-type-field" name="type">
            <img src="./leaflet.wms_files/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" data-item-type="suggestion">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="color-text-secondary">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" data-item-type="scoped_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-owner-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" data-item-type="owner_scoped_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this organization">
        In this organization
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" data-item-type="global_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


</ul>

            </div>
        </label>
</form>    </div>
  </div>

          </div>

        <a href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms" class="HeaderMenu-link flex-shrink-0 no-underline mr-3" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6cd81b827a200412b4939a00dfb9eecbdb857ad77fea7983eeca55c7a1b6ceed" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">
          Sign in
        </a>
            <nux-signup-candidates data-attribute-name="href" data-candidate-url="/join_next?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&amp;source=header-repo&amp;source_repo=heigeo%2Fleaflet.wms" data-action="loaded:nux-signup-candidates#determineSignupAction" data-catalyst="" data-form-method="">
              <a href="https://github.com/join?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&amp;source=header-repo&amp;source_repo=heigeo%2Fleaflet.wms" class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1" data-target="nux-signup-candidates.signupAction" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="6cd81b827a200412b4939a00dfb9eecbdb857ad77fea7983eeca55c7a1b6ceed">
                Sign up
              </a>
            </nux-signup-candidates>
      </div>
    </div>
  </div>
</header>

    </div>

  <div id="start-of-content" class="show-on-focus"></div>





    <div data-pjax-replace="" id="js-flash-container">


  <template class="js-flash-template"></template>
</div>


    

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container" data-pjax-container="">
      

      
    






  


  <div class="color-bg-secondary pt-3 hide-full-screen mb-5">

      <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">

        <div class="flex-auto min-width-0 width-fit mr-3">
            <h1 class=" d-flex flex-wrap flex-items-center break-word f3 text-normal">
    <svg class="octicon octicon-repo color-text-secondary mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
  <span class="author flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="organization" data-hovercard-url="/orgs/heigeo/hovercard" href="https://github.com/heigeo">heigeo</a>
  </span>
  <span class="mx-1 flex-self-stretch color-text-secondary">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="https://github.com/heigeo/leaflet.wms">leaflet.wms</a>
  </strong>
  
</h1>


        </div>

          <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">

  <li>
      <a class="tooltipped tooltipped-s btn btn-sm" aria-label="You must be signed in to change notification settings" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1a2949c9740517fbcd1517df6b80ee57d8108079449288d7165df14d1b1d7a30" href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-bell">
    <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
</svg>
    Notifications
</a>
  </li>

  <li>
          <a class="btn btn-sm btn-with-count  tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:24774804,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="92458c8aa4a3e46df4ba744d3968a0aab3c1f591c955f08b406fa453f027ba8f" href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star v-align-text-bottom mr-1">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
      <span data-view-component="true">
        Star
</span></a>
    <a class="social-count js-social-count" href="https://github.com/heigeo/leaflet.wms/stargazers" aria-label="193 users starred this repository">
      193
    </a>

  </li>

  <li>
        <a class="btn btn-sm btn-with-count tooltipped tooltipped-s" aria-label="You must be signed in to fork a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;repo details fork button&quot;,&quot;repository_id&quot;:24774804,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="726721cae61e44540069f9698ab6ca4a3cf67979a768b87ca36e15e6e24fdf7c" href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo-forked">
    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg>
          Fork
</a>
      <a href="https://github.com/heigeo/leaflet.wms/network/members" class="social-count" aria-label="129 users forked this repository">
        129
      </a>
  </li>
</ul>

      </div>
          <div class="d-block d-md-none mb-2 px-3 px-md-4 px-lg-5">
      <p class="f4 mb-3">
        A Leaflet plugin for working with Web Map services, providing: single-tile/untiled/nontiled layers, shared WMS sources, and GetFeatureInfo-powered identify.
      </p>
      <div class="mb-2 d-flex flex-items-center">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-link flex-shrink-0 mr-2">
    <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
</svg>
        <span class="flex-auto min-width-0 css-truncate css-truncate-target width-fit">
          <a title="http://heigeo.github.io/leaflet.wms/" role="link" target="_blank" class="text-bold" rel="noopener noreferrer" href="http://heigeo.github.io/leaflet.wms/">heigeo.github.io/leaflet.wms/</a>
        </span>
      </div>
      <div class="mb-2">
        <a href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/LICENSE" class="Link--muted">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-law mr-1">
    <path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
</svg>
            MIT License
        </a>
      </div>
    <div class="mb-3">
      <a class="Link--secondary no-underline mr-3" href="https://github.com/heigeo/leaflet.wms/stargazers">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star mr-1">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
        <span class="text-bold">193</span>
        stars
</a>      <a class="Link--secondary no-underline" href="https://github.com/heigeo/leaflet.wms/network/members">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo-forked mr-1">
    <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
</svg>
        <span class="text-bold">129</span>
        forks
</a>    </div>
    <div class="d-flex">
      <div class="flex-1 mr-2">
            <a class="btn btn-sm  btn-block tooltipped tooltipped-s" aria-label="You must be signed in to star a repository" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;star button&quot;,&quot;repository_id&quot;:24774804,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="92458c8aa4a3e46df4ba744d3968a0aab3c1f591c955f08b406fa453f027ba8f" href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star v-align-text-bottom mr-1">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
      <span data-view-component="true">
        Star
</span></a>

      </div>
      <div class="flex-1">
          <a class="tooltipped tooltipped-s btn btn-sm btn-block" aria-label="You must be signed in to change notification settings" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;notification subscription menu watch&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;LOG_IN&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1a2949c9740517fbcd1517df6b80ee57d8108079449288d7165df14d1b1d7a30" href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-bell">
    <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
</svg>
    Notifications
</a>
      </div>
    </div>
  </div>

        

  <nav data-pjax="#js-repo-pjax-container" aria-label="Repository" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5 color-bg-secondary">

    <ul data-view-component="true" class="UnderlineNav-body list-style-none">
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /heigeo/leaflet.wms" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item selected">
    
                  <svg class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
          <span data-content="Code">Code</span>
            <span title="Not available" data-view-component="true" class="Counter"></span>

    
</a></li>
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /heigeo/leaflet.wms/issues" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item">
    
                  <svg class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
          <span data-content="Issues">Issues</span>
            <span title="27" data-view-component="true" class="Counter">27</span>

    
</a></li>
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /heigeo/leaflet.wms/pulls" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item">
    
                  <svg class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
          <span data-content="Pull requests">Pull requests</span>
            <span title="10" data-view-component="true" class="Counter">10</span>

    
</a></li>
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /heigeo/leaflet.wms/actions" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item">
    
                  <svg class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>
          <span data-content="Actions">Actions</span>
            <span title="Not available" data-view-component="true" class="Counter"></span>

    
</a></li>
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /heigeo/leaflet.wms/projects" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item">
    
                  <svg class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
          <span data-content="Projects">Projects</span>
            <span title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>

    
</a></li>
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms/wiki" data-tab-item="i5wiki-tab" data-selected-links="repo_wiki /heigeo/leaflet.wms/wiki" data-hotkey="g w" data-ga-click="Repository, Navigation click, Wikis tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item">
    
                  <svg class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>
          <span data-content="Wiki">Wiki</span>
            <span title="Not available" data-view-component="true" class="Counter"></span>

    
</a></li>
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms/security" data-tab-item="i6security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /heigeo/leaflet.wms/security" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item">
    
                  <svg class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg>
          <span data-content="Security">Security</span>
            

    
</a></li>
        <li data-view-component="true" class="d-flex">
  <a href="https://github.com/heigeo/leaflet.wms/pulse" data-tab-item="i7insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /heigeo/leaflet.wms/pulse" data-ga-click="Repository, Navigation click, Insights tab" data-view-component="true" class="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item">
    
                  <svg class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg>
          <span data-content="Insights">Insights</span>
            <span title="Not available" data-view-component="true" class="Counter"></span>

    
</a></li>
</ul>
      <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions  js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0">      <details data-view-component="true" class="details-overlay details-reset position-relative">
  <summary role="button" data-view-component="true">          <div class="UnderlineNav-item mr-0 border-0">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
            <span class="sr-only">More</span>
          </div>
</summary>
  <div data-view-component="true">          <details-menu role="menu" data-view-component="true" class="dropdown-menu dropdown-menu-sw">
  
            <ul>
                <li data-menu-item="i0code-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" aria-current="page" data-selected-links=" /heigeo/leaflet.wms" href="https://github.com/heigeo/leaflet.wms">
                    Code
</a>                </li>
                <li data-menu-item="i1issues-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /heigeo/leaflet.wms/issues" href="https://github.com/heigeo/leaflet.wms/issues">
                    Issues
</a>                </li>
                <li data-menu-item="i2pull-requests-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /heigeo/leaflet.wms/pulls" href="https://github.com/heigeo/leaflet.wms/pulls">
                    Pull requests
</a>                </li>
                <li data-menu-item="i3actions-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /heigeo/leaflet.wms/actions" href="https://github.com/heigeo/leaflet.wms/actions">
                    Actions
</a>                </li>
                <li data-menu-item="i4projects-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /heigeo/leaflet.wms/projects" href="https://github.com/heigeo/leaflet.wms/projects">
                    Projects
</a>                </li>
                <li data-menu-item="i5wiki-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /heigeo/leaflet.wms/wiki" href="https://github.com/heigeo/leaflet.wms/wiki">
                    Wiki
</a>                </li>
                <li data-menu-item="i6security-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /heigeo/leaflet.wms/security" href="https://github.com/heigeo/leaflet.wms/security">
                    Security
</a>                </li>
                <li data-menu-item="i7insights-tab" hidden="">
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /heigeo/leaflet.wms/pulse" href="https://github.com/heigeo/leaflet.wms/pulse">
                    Insights
</a>                </li>
            </ul>

</details-menu></div>
</details></div>
</nav>

  </div>


<div class="container-xl clearfix new-discussion-timeline px-3 px-md-4 px-lg-5">
  <div id="repo-content-pjax-container" class="repository-content ">


  
<div>
  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="https://github.com/heigeo/leaflet.wms/blob/1f3542158b1743a681b375e3853cd147af742d91/src/leaflet.wms.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:34e2392247e2dd35a7fc2485d7de0713b4c4778b01f96f4168a7b93684c6276f -->

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
      
<div class="position-relative">
  <details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
    <summary class="btn css-truncate" data-hotkey="w" title="Switch branches or tags">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-git-branch text-gray">
    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
</svg>
      <span class="css-truncate-target" data-menu-button="">gh-pages</span>
      <span class="dropdown-caret"></span>
    </summary>

      
<div class="SelectMenu">
  <div class="SelectMenu-modal">
    <header class="SelectMenu-header">
      <span class="SelectMenu-title">Switch branches/tags</span>
      <button class="SelectMenu-closeButton" type="button" data-toggle-for="branch-select-menu"><svg aria-label="Close menu" aria-hidden="false" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg></button>
    </header>

    <input-demux data-action="tab-container-change:input-demux#storeInput tab-container-changed:input-demux#updateInput" data-catalyst="">
      <tab-container class="d-flex flex-column js-branches-tags-tabs" style="min-height: 0;">
        <div class="SelectMenu-filter">
          <input data-target="input-demux.source" id="context-commitish-filter-field" class="SelectMenu-input form-control" aria-owns="ref-list-branches" data-controls-ref-menu-id="ref-list-branches" autofocus="" autocomplete="off" aria-label="Filter branches/tags" placeholder="Filter branches/tags" type="text">
        </div>

        <div class="SelectMenu-tabs" role="tablist" data-target="input-demux.control">
          <button class="SelectMenu-tab" type="button" role="tab" aria-selected="true" tabindex="0">Branches</button>
          <button class="SelectMenu-tab" type="button" role="tab" aria-selected="false" tabindex="-1">Tags</button>
        </div>

        <div role="tabpanel" id="ref-list-branches" data-filter-placeholder="Filter branches/tags" class="d-flex flex-column flex-auto overflow-auto" tabindex="">
          <ref-selector type="branch" data-targets="input-demux.sinks" data-action="
              input-entered:ref-selector#inputEntered
              tab-selected:ref-selector#tabSelected
              focus-list:ref-selector#focusFirstListMember
            " query-endpoint="/heigeo/leaflet.wms/refs" cache-key="v0:1478548896.0" current-committish="Z2gtcGFnZXM=" default-branch="Z2gtcGFnZXM=" name-with-owner="aGVpZ2VvL2xlYWZsZXQud21z" data-catalyst="">

            <template data-target="ref-selector.fetchFailedTemplate"></template>

              <template data-target="ref-selector.noMatchTemplate"></template>


            <!-- TODO: this max-height is necessary or else the branch list won't scroll.  why? -->
            <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list " style="max-height: 330px">
              <div class="SelectMenu-loading pt-3 pb-0" aria-label="Menu is loading">
                <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="32" height="32" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
              </div>
            </div>

              <template data-target="ref-selector.itemTemplate"></template>


              <footer class="SelectMenu-footer"><a href="https://github.com/heigeo/leaflet.wms/branches">View all branches</a></footer>
          </ref-selector>

        </div>

        <div role="tabpanel" id="tags-menu" data-filter-placeholder="Find a tag" class="d-flex flex-column flex-auto overflow-auto" tabindex="" hidden="">
          <ref-selector type="tag" data-action="
              input-entered:ref-selector#inputEntered
              tab-selected:ref-selector#tabSelected
              focus-list:ref-selector#focusFirstListMember
            " data-targets="input-demux.sinks" query-endpoint="/heigeo/leaflet.wms/refs" cache-key="v0:1478548896.0" current-committish="Z2gtcGFnZXM=" default-branch="Z2gtcGFnZXM=" name-with-owner="aGVpZ2VvL2xlYWZsZXQud21z" data-catalyst="">

            <template data-target="ref-selector.fetchFailedTemplate"></template>

            <template data-target="ref-selector.noMatchTemplate"></template>

              <template data-target="ref-selector.itemTemplate"></template>


            <div data-target="ref-selector.listContainer" role="menu" class="SelectMenu-list" style="max-height: 330px">
              <div class="SelectMenu-loading pt-3 pb-0" aria-label="Menu is loading">
                <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="32" height="32" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
              </div>
            </div>
              <footer class="SelectMenu-footer"><a href="https://github.com/heigeo/leaflet.wms/tags">View all tags</a></footer>
          </ref-selector>
        </div>
      </tab-container>
    </input-demux>
  </div>
</div>

  </details>

</div>

      <h2 id="blob-path" class="breadcrumb flex-auto flex-self-center min-width-0 text-normal mx-2 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="https://github.com/heigeo/leaflet.wms"><span>leaflet.wms</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="https://github.com/heigeo/leaflet.wms/tree/gh-pages/src"><span>src</span></a></span><span class="separator">/</span><strong class="final-path">leaflet.wms.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link Link--secondary css-truncate" aria-haspopup="menu" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1bebc2cf9f6b95c0db1a3cf229da69af3e197ab0227291a9da8cdc332c497946" role="button">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-code">
    <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
</svg>
    <span data-menu-button="">Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
        </button>
      </header>
        <div class="SelectMenu-filter">
          <input class="SelectMenu-input form-control js-filterable-field" id="jumpto-symbols-filter-field" type="text" autocomplete="off" spellcheck="false" autofocus="" placeholder="Filter definitions" aria-label="Filter definitions">
        </div>
      <div class="SelectMenu-list">
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L30">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">keys</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L163">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">done</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L236">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">source</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L278">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">layer</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L284">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">getSourceForUrl</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L386">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">_swap</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L470">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">overlay</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L475">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">ajax</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="30531e4928c2970a298c98478c49f106822739b8547089c723434edde2a1b071" href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js#L482">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text="">change</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation index up-to-date
          <svg class="octicon octicon-dot-fill text-green" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>
      <a href="https://github.com/heigeo/leaflet.wms/find/gh-pages" class="js-pjax-capture-input btn mr-2 d-none d-md-block" data-pjax="" data-hotkey="t">
        Go to file
      </a>

      <details id="blob-more-options-details" data-view-component="true" class="details-overlay details-reset position-relative">
  <summary role="button" data-view-component="true" class="btn">
  
            <svg aria-label="More options" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>

  

</summary>
  <div data-view-component="true">          <ul class="dropdown-menu dropdown-menu-sw">
            <li class="d-block d-md-none">
              <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:24774804,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="1c651ad610dc59c5d2b814079a347dbf2445f7243283cece23c086b4465185a8" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="https://github.com/heigeo/leaflet.wms/find/gh-pages">
                <span class="flex-auto">Go to file</span>
                <span class="text-small color-text-secondary" aria-hidden="true">T</span>
</a>            </li>
            <li data-toggle-for="blob-more-options-details">
              <button type="button" data-toggle-for="jumpto-line-details-dialog" class="btn-link dropdown-item">
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Go to line</span>
                  <span class="text-small color-text-secondary" aria-hidden="true">L</span>
                </span>
              </button>
            </li>
            <li data-toggle-for="blob-more-options-details">
              <button type="button" data-toggle-for="jumpto-symbol-select-menu" class="btn-link dropdown-item">
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Go to definition</span>
                  <span class="text-small color-text-secondary" aria-hidden="true">R</span>
                </span>
              </button>
            </li>
            <li class="dropdown-divider" role="none"></li>
            <li>
              <clipboard-copy value="src/leaflet.wms.js" class="dropdown-item cursor-pointer" data-toggle-for="blob-more-options-details" tabindex="0" role="button">
                Copy path
              </clipboard-copy>
            </li>
            <li>
              <clipboard-copy value="https://github.com/heigeo/leaflet.wms/blob/1f3542158b1743a681b375e3853cd147af742d91/src/leaflet.wms.js" class="dropdown-item cursor-pointer" data-toggle-for="blob-more-options-details" tabindex="0" role="button">
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Copy permalink</span>
                </span>
              </clipboard-copy>
            </li>
          </ul>
</div>
</details>    </div>



    <div class="Box d-flex flex-column flex-shrink-0 mb-3">
      

  <div class="Box-header Box-header--blue Details js-details-container">
      <div class="d-flex flex-items-center">
        <span class="flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1">
          <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/sheppard/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/sheppard"><img class="avatar avatar-user" src="./leaflet.wms_files/1863675" width="24" height="24" alt="@sheppard"></a>
        </span>
        <div class="flex-1 d-flex flex-items-center ml-3 min-width-0">
          <div class="css-truncate css-truncate-overflow">
            <a class="text-bold Link--primary" rel="contributor" data-hovercard-type="user" data-hovercard-url="/users/sheppard/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/sheppard">sheppard</a>

                <span class="markdown-title">
                  <a data-pjax="true" title="don&#39;t modify original options object" class="Link--secondary" href="https://github.com/heigeo/leaflet.wms/commit/1f3542158b1743a681b375e3853cd147af742d91">don't modify original options object</a>
                </span>
          </div>


          <span class="ml-2">
            
  <details class="commit-build-statuses details-overlay details-reset js-dropdown-details hx_dropdown-fullscreen" data-deferred-details-content-url="/_render_node/MDE3OlN0YXR1c0NoZWNrUm9sbHVwMjQ3NzQ4MDQ6MWYzNTQyMTU4YjE3NDNhNjgxYjM3NWUzODUzY2QxNDdhZjc0MmQ5MQ==/statuses/combined_branch_status">
    <summary class="color-text-success">
      <svg aria-label="1 / 1 checks OK" class="octicon octicon-check" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
    </summary>
    <div class="dropdown-menu dropdown-menu-e overflow-hidden">
      <include-fragment class="m-4 d-flex flex-column flex-items-center">
        <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="32" height="32" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
        <div class="color-text-secondary no-wrap">Loading status checks…</div>
      </include-fragment>
    </div>
  </details>

          </span>
        </div>
        <div class="ml-3 d-flex flex-shrink-0 flex-items-center flex-justify-end color-text-secondary no-wrap">
          <span class="d-none d-md-inline">
            <span>Latest commit</span>
            <a class="text-small text-mono Link--secondary" href="https://github.com/heigeo/leaflet.wms/commit/1f3542158b1743a681b375e3853cd147af742d91" data-pjax="">1f35421</a>
            <span itemprop="dateModified"><relative-time datetime="2017-05-22T19:12:11Z" class="no-wrap" title="22 may 2017 14:12 GMT-5">on 22 May 2017</relative-time></span>
          </span>

          <a data-pjax="" href="https://github.com/heigeo/leaflet.wms/commits/gh-pages/src/leaflet.wms.js" class="ml-3 no-wrap Link--primary no-underline">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-history text-gray">
    <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path>
</svg>
            <span class="d-none d-sm-inline">
              <strong>History</strong>
            </span>
          </a>
        </div>
      </div>

  </div>

  <div class="Box-body d-flex flex-items-center flex-auto border-bottom-0 flex-wrap">
    <details class="details-reset details-overlay details-overlay-dark lh-default color-text-primary float-left mr-3" id="blob_contributors_box">
      <summary class="Link--primary" role="button">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-people text-gray">
    <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
</svg>
        <strong>2</strong>
        
        contributors
      </summary>
      <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast" aria-label="Users who have contributed to this file" src="/heigeo/leaflet.wms/contributors-list/gh-pages/src/leaflet.wms.js" preload="" role="dialog" aria-modal="true">
        <div class="Box-header">
          <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog="">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
          </button>
          <h3 class="Box-title">
            Users who have contributed to this file
          </h3>
        </div>
        <include-fragment>
          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="32" height="32" class="my-3 mx-auto d-block anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke"></circle>
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
        </include-fragment>
      </details-dialog>
    </details>
      <span class="">
    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/sheppard/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/heigeo/leaflet.wms/commits/gh-pages/src/leaflet.wms.js?author=sheppard">
      <img class="avatar mr-2 avatar-user" src="./leaflet.wms_files/1863675" width="24" height="24" alt="@sheppard"> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/users/ericjrsilva/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/heigeo/leaflet.wms/commits/gh-pages/src/leaflet.wms.js?author=ericjrsilva">
      <img class="avatar mr-2 avatar-user" src="./leaflet.wms_files/9969341" width="24" height="24" alt="@ericjrsilva"> 
</a>
</span>

  </div>
    </div>








  
    <div data-target="readme-toc.content" class="Box mt-3 position-relative
    ">
      
  <div class="Box-header py-2 pr-2 d-flex flex-shrink-0 flex-md-row flex-items-center">


  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1">

      495 lines (438 sloc)
      <span class="file-info-divider"></span>
    13.8 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between hide-sm hide-md">

    <div class="BtnGroup">
      <a href="https://github.com/heigeo/leaflet.wms/raw/gh-pages/src/leaflet.wms.js" id="raw-url" role="button" data-view-component="true" class="btn-sm btn BtnGroup-item">
  
  Raw
  

</a>
        <a href="https://github.com/heigeo/leaflet.wms/blame/gh-pages/src/leaflet.wms.js" data-hotkey="b" role="button" data-view-component="true" class="js-update-url-with-hash btn-sm btn BtnGroup-item">
  
  Blame
  

</a>
    </div>

    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform" data-platforms="windows,mac" href="https://desktop.github.com/" aria-label="Open this file in GitHub Desktop" data-ga-click="Repository, open with desktop">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-device-desktop">
    <path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path>
</svg>
          </a>

          <a href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms%2Fblob%2Fgh-pages%2Fsrc%2Fleaflet.wms.js" class="btn-octicon disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-pencil">
    <path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path>
</svg>
          </a>
          <a href="https://github.com/login?return_to=%2Fheigeo%2Fleaflet.wms%2Fblob%2Fgh-pages%2Fsrc%2Fleaflet.wms.js" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw" aria-label="You must be signed in to make or propose changes">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-trash">
    <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path>
</svg>
          </a>
    </div>
  </div>

    <div class="d-flex hide-lg hide-xl flex-order-2 flex-grow-0">
      <details class="dropdown details-reset details-overlay d-inline-block">
        <summary class="btn-octicon" aria-haspopup="true" aria-label="possible actions">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
        </summary>

        <ul class="dropdown-menu dropdown-menu-sw">
            <li>
                <a class="dropdown-item tooltipped tooltipped-nw js-remove-unless-platform" data-platforms="windows,mac" href="https://desktop.github.com/" data-ga-click="Repository, open with desktop">
                  Open with Desktop
                </a>
            </li>
          <li>
            <a class="dropdown-item" href="https://github.com/heigeo/leaflet.wms/raw/gh-pages/src/leaflet.wms.js">
              View raw
            </a>
          </li>
            <li>
              <a class="dropdown-item" href="https://github.com/heigeo/leaflet.wms/blame/gh-pages/src/leaflet.wms.js">
                View blame
              </a>
            </li>

        </ul>
      </details>
    </div>
</div>


      
  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript  gist-border-0">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip="">
      <tbody><tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * leaflet.wms.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * A collection of Leaflet utilities for working with Web Mapping services.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (c) 2014-2016, Houston Engineering, Inc.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * MIT License</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">factory</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Module systems magic dance, Leaflet edition</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-s1">define</span> <span class="pl-c1">===</span> <span class="pl-s">'function'</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">define</span><span class="pl-kos">.</span><span class="pl-c1">amd</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// AMD</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">define</span><span class="pl-kos">(</span><span class="pl-kos">[</span><span class="pl-s">'leaflet'</span><span class="pl-kos">]</span><span class="pl-kos">,</span> <span class="pl-s1">factory</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-smi">module</span> <span class="pl-c1">!==</span> <span class="pl-s">'undefined'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Node/CommonJS</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">module</span><span class="pl-kos">.</span><span class="pl-c1">exports</span> <span class="pl-c1">=</span> <span class="pl-s1">factory</span><span class="pl-kos">(</span><span class="pl-en">require</span><span class="pl-kos">(</span><span class="pl-s">'leaflet'</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Browser globals</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">L</span> <span class="pl-c1">===</span> <span class="pl-s">'undefined'</span><span class="pl-kos">)</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">throw</span> <span class="pl-s">'Leaflet must be loaded first!'</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Namespace</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">L</span><span class="pl-kos">.</span><span class="pl-c1">WMS</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">L</span><span class="pl-kos">.</span><span class="pl-c1">wms</span> <span class="pl-c1">=</span> <span class="pl-s1">factory</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">L</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-v">L</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Module object</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-s1">wms</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Quick shim for Object.keys()</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-kos">(</span><span class="pl-s">'keys'</span> <span class="pl-k">in</span> <span class="pl-v">Object</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-v">Object</span><span class="pl-kos">.</span><span class="pl-en">keys</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">obj</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">result</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">var</span> <span class="pl-s1">i</span> <span class="pl-k">in</span> <span class="pl-s1">obj</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">obj</span><span class="pl-kos">.</span><span class="pl-en">hasOwnProperty</span><span class="pl-kos">(</span><span class="pl-s1">i</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">result</span><span class="pl-kos">.</span><span class="pl-en">push</span><span class="pl-kos">(</span><span class="pl-s1">i</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s1">result</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * wms.Source</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The Source object manages a single WMS connection.  Multiple "layers" can be</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * created with the getLayer function, but a single request will be sent for</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * each image update.  Can be used in non-tiled "overlay" mode (default), or</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * tiled mode, via an internal wms.Overlay or wms.TileLayer, respectively.</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">Source</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">Layer</span><span class="pl-kos">.</span><span class="pl-en">extend</span><span class="pl-kos">(</span><span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'options'</span>: <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'untiled'</span>: <span class="pl-c1">true</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'identify'</span>: <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'initialize'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">setOptions</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">tiled</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">untiled</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span> <span class="pl-c1">=</span> <span class="pl-s1">url</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_subLayers</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">createOverlay</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">untiled</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'createOverlay'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">untiled</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Create overlay with all options other than untiled &amp; identify</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">overlayOptions</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">var</span> <span class="pl-s1">opt</span> <span class="pl-k">in</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">opt</span> <span class="pl-c1">!=</span> <span class="pl-s">'untiled'</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">opt</span> <span class="pl-c1">!=</span> <span class="pl-s">'identify'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">overlayOptions</span><span class="pl-kos">[</span><span class="pl-s1">opt</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">[</span><span class="pl-s1">opt</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">untiled</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">overlay</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span><span class="pl-kos">,</span> <span class="pl-s1">overlayOptions</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">tileLayer</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span><span class="pl-kos">,</span> <span class="pl-s1">overlayOptions</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'onAdd'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">refreshOverlay</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getEvents'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">identify</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-kos">{</span><span class="pl-s">'click'</span>: <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">identify</span><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'setOpacity'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">opacity</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">         <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">opacity</span> <span class="pl-c1">=</span> <span class="pl-s1">opacity</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">         <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">             <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">.</span><span class="pl-en">setOpacity</span><span class="pl-kos">(</span><span class="pl-s1">opacity</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">         <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'bringToBack'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">         <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">isBack</span> <span class="pl-c1">=</span> <span class="pl-c1">true</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">         <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">             <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">.</span><span class="pl-en">bringToBack</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">         <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'bringToFront'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">         <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">isBack</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">         <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">             <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">.</span><span class="pl-en">bringToFront</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">         <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getLayer'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">name</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">layer</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">,</span> <span class="pl-s1">name</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'addSubLayer'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">name</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_subLayers</span><span class="pl-kos">[</span><span class="pl-s1">name</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-c1">true</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">refreshOverlay</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'removeSubLayer'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">name</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_subLayers</span><span class="pl-kos">[</span><span class="pl-s1">name</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">refreshOverlay</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'refreshOverlay'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">subLayers</span> <span class="pl-c1">=</span> <span class="pl-v">Object</span><span class="pl-kos">.</span><span class="pl-en">keys</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_subLayers</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">","</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">subLayers</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">.</span><span class="pl-en">remove</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">.</span><span class="pl-en">setParams</span><span class="pl-kos">(</span><span class="pl-kos">{</span><span class="pl-s">'layers'</span>: <span class="pl-s1">subLayers</span><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">.</span><span class="pl-en">addTo</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'identify'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">evt</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Identify map features in response to map clicks. To customize this</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// behavior, create a class extending wms.Source and override one or</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// more of the following hook functions.</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">layers</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getIdentifyLayers</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">layers</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getFeatureInfo</span><span class="pl-kos">(</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">evt</span><span class="pl-kos">.</span><span class="pl-c1">containerPoint</span><span class="pl-kos">,</span> <span class="pl-s1">evt</span><span class="pl-kos">.</span><span class="pl-c1">latlng</span><span class="pl-kos">,</span> <span class="pl-s1">layers</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">showFeatureInfo</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getFeatureInfo'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">point</span><span class="pl-kos">,</span> <span class="pl-s1">latlng</span><span class="pl-kos">,</span> <span class="pl-s1">layers</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Request WMS GetFeatureInfo and call callback with results</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// (split from identify() to faciliate use outside of map events)</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">params</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getFeatureInfoParams</span><span class="pl-kos">(</span><span class="pl-s1">point</span><span class="pl-kos">,</span> <span class="pl-s1">layers</span><span class="pl-kos">)</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">url</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span> <span class="pl-c1">+</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">Util</span><span class="pl-kos">.</span><span class="pl-en">getParamString</span><span class="pl-kos">(</span><span class="pl-s1">params</span><span class="pl-kos">,</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">showWaiting</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">ajax</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">done</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">done</span><span class="pl-kos">(</span><span class="pl-s1">result</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">hideWaiting</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> <span class="pl-s1">text</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">parseFeatureInfo</span><span class="pl-kos">(</span><span class="pl-s1">result</span><span class="pl-kos">,</span> <span class="pl-s1">url</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">callback</span><span class="pl-kos">.</span><span class="pl-en">call</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">,</span> <span class="pl-s1">latlng</span><span class="pl-kos">,</span> <span class="pl-s1">text</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'ajax'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">ajax</span><span class="pl-kos">.</span><span class="pl-en">call</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">,</span> <span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getIdentifyLayers'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Hook to determine which layers to identify</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">identifyLayers</span><span class="pl-kos">)</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">identifyLayers</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-v">Object</span><span class="pl-kos">.</span><span class="pl-en">keys</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_subLayers</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">     <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getFeatureInfoParams'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">point</span><span class="pl-kos">,</span> <span class="pl-s1">layers</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Hook to generate parameters for WMS service GetFeatureInfo request</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">wmsParams</span><span class="pl-kos">,</span> <span class="pl-s1">overlay</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">untiled</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// Use existing overlay</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">wmsParams</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_overlay</span><span class="pl-kos">.</span><span class="pl-c1">wmsParams</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// Create overlay instance to leverage updateWmsParams</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">overlay</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">createOverlay</span><span class="pl-kos">(</span><span class="pl-c1">true</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-en">updateWmsParams</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">wmsParams</span> <span class="pl-c1">=</span> <span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-c1">wmsParams</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">wmsParams</span><span class="pl-kos">.</span><span class="pl-c1">layers</span> <span class="pl-c1">=</span> <span class="pl-s1">layers</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">','</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">infoParams</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">            <span class="pl-s">'request'</span>: <span class="pl-s">'GetFeatureInfo'</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">            <span class="pl-s">'query_layers'</span>: <span class="pl-s1">layers</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">','</span><span class="pl-kos">)</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">            <span class="pl-s">'X'</span>: <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">point</span><span class="pl-kos">.</span><span class="pl-c1">x</span><span class="pl-kos">)</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">            <span class="pl-s">'Y'</span>: <span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">round</span><span class="pl-kos">(</span><span class="pl-s1">point</span><span class="pl-kos">.</span><span class="pl-c1">y</span><span class="pl-kos">)</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">extend</span><span class="pl-kos">(</span><span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">,</span> <span class="pl-s1">wmsParams</span><span class="pl-kos">,</span> <span class="pl-s1">infoParams</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'parseFeatureInfo'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">result</span><span class="pl-kos">,</span> <span class="pl-s1">url</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Hook to handle parsing AJAX response</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">result</span> <span class="pl-c1">==</span> <span class="pl-s">"error"</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// AJAX failed, possibly due to CORS issues.</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// Try loading content in &lt;iframe&gt;.</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">result</span> <span class="pl-c1">=</span> <span class="pl-s">"&lt;iframe src='"</span> <span class="pl-c1">+</span> <span class="pl-s1">url</span> <span class="pl-c1">+</span> <span class="pl-s">"' style='border:none'&gt;"</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s1">result</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'showFeatureInfo'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">latlng</span><span class="pl-kos">,</span> <span class="pl-s1">info</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Hook to handle displaying parsed AJAX response to the user</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-en">openPopup</span><span class="pl-kos">(</span><span class="pl-s1">info</span><span class="pl-kos">,</span> <span class="pl-s1">latlng</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'showWaiting'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Hook to customize AJAX wait animation</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-c1">_container</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">cursor</span> <span class="pl-c1">=</span> <span class="pl-s">"progress"</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'hideWaiting'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Hook to remove AJAX wait animation</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-c1">_container</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">cursor</span> <span class="pl-c1">=</span> <span class="pl-s">"default"</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">source</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">Source</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Layer</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Leaflet "layer" with all actual rendering handled via an underlying Source</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * object.  Can be called directly with a URL to automatically create or reuse</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * an existing Source.  Note that the auto-source feature doesn't work well in</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * multi-map environments; so for best results, create a Source first and use</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * getLayer() to retrieve wms.Layer instances.</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">Layer</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">Layer</span><span class="pl-kos">.</span><span class="pl-en">extend</span><span class="pl-kos">(</span><span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'initialize'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">source</span><span class="pl-kos">,</span> <span class="pl-s1">layerName</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">setOptions</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">source</span><span class="pl-kos">.</span><span class="pl-c1">addSubLayer</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// Assume source is a URL</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">source</span> <span class="pl-c1">=</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">getSourceForUrl</span><span class="pl-kos">(</span><span class="pl-s1">source</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span> <span class="pl-c1">=</span> <span class="pl-s1">source</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_name</span> <span class="pl-c1">=</span> <span class="pl-s1">layerName</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'onAdd'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span><span class="pl-kos">.</span><span class="pl-en">addTo</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span><span class="pl-kos">.</span><span class="pl-en">addSubLayer</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_name</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'onRemove'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span><span class="pl-kos">.</span><span class="pl-en">removeSubLayer</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_name</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'setOpacity'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">opacity</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span><span class="pl-kos">.</span><span class="pl-en">setOpacity</span><span class="pl-kos">(</span><span class="pl-s1">opacity</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'bringToBack'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span><span class="pl-kos">.</span><span class="pl-en">bringToBack</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'bringToFront'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_source</span><span class="pl-kos">.</span><span class="pl-en">bringToFront</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">layer</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">source</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">Layer</span><span class="pl-kos">(</span><span class="pl-s1">source</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Cache of sources for use with wms.Layer auto-source option</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> <span class="pl-s1">sources</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">getSourceForUrl</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">sources</span><span class="pl-kos">[</span><span class="pl-s1">url</span><span class="pl-kos">]</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">sources</span><span class="pl-kos">[</span><span class="pl-s1">url</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">source</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-s1">sources</span><span class="pl-kos">[</span><span class="pl-s1">url</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Copy tiled WMS layer from leaflet core, in case we need to subclass it later</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">TileLayer</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">TileLayer</span><span class="pl-kos">.</span><span class="pl-c1">WMS</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">tileLayer</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">tileLayer</span><span class="pl-kos">.</span><span class="pl-c1">wms</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * wms.Overlay:</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * "Single Tile" WMS image overlay that updates with map changes.</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Portions of wms.Overlay are directly extracted from L.TileLayer.WMS.</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See Leaflet license.</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">Overlay</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">Layer</span><span class="pl-kos">.</span><span class="pl-en">extend</span><span class="pl-kos">(</span><span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'defaultWmsParams'</span>: <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'service'</span>: <span class="pl-s">'WMS'</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'request'</span>: <span class="pl-s">'GetMap'</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'version'</span>: <span class="pl-s">'1.1.1'</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'layers'</span>: <span class="pl-s">''</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'styles'</span>: <span class="pl-s">''</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'format'</span>: <span class="pl-s">'image/jpeg'</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'transparent'</span>: <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'options'</span>: <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'crs'</span>: <span class="pl-c1">null</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'uppercase'</span>: <span class="pl-c1">false</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'attribution'</span>: <span class="pl-s">''</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'opacity'</span>: <span class="pl-c1">1</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'isBack'</span>: <span class="pl-c1">false</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'minZoom'</span>: <span class="pl-c1">0</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">        <span class="pl-s">'maxZoom'</span>: <span class="pl-c1">18</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'initialize'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span> <span class="pl-c1">=</span> <span class="pl-s1">url</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Move WMS parameters to params object</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">params</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">,</span> <span class="pl-s1">opts</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">var</span> <span class="pl-s1">opt</span> <span class="pl-k">in</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">opt</span> <span class="pl-k">in</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">                 <span class="pl-s1">opts</span><span class="pl-kos">[</span><span class="pl-s1">opt</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">options</span><span class="pl-kos">[</span><span class="pl-s1">opt</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">             <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">                 <span class="pl-s1">params</span><span class="pl-kos">[</span><span class="pl-s1">opt</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">options</span><span class="pl-kos">[</span><span class="pl-s1">opt</span><span class="pl-kos">]</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">             <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">setOptions</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">,</span> <span class="pl-s1">opts</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">wmsParams</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">extend</span><span class="pl-kos">(</span><span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">,</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">defaultWmsParams</span><span class="pl-kos">,</span> <span class="pl-s1">params</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'setParams'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">params</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">extend</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">wmsParams</span><span class="pl-kos">,</span> <span class="pl-s1">params</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">update</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getAttribution'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">attribution</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'onAdd'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">update</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'onRemove'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">map</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">map</span><span class="pl-kos">.</span><span class="pl-en">removeLayer</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">delete</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentUrl</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">delete</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentUrl</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getEvents'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">            <span class="pl-s">'moveend'</span>: <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">update</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'update'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Determine image URL and whether it has changed since last update</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">updateWmsParams</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">url</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-en">getImageUrl</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentUrl</span> <span class="pl-c1">==</span> <span class="pl-s1">url</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentUrl</span> <span class="pl-c1">=</span> <span class="pl-s1">url</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Keep current image overlay in place until new one loads</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// (inspired by esri.leaflet)</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">bounds</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-en">getBounds</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">overlay</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">imageOverlay</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">bounds</span><span class="pl-kos">,</span> <span class="pl-kos">{</span><span class="pl-s">'opacity'</span>: <span class="pl-c1">0</span><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-en">addTo</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-en">once</span><span class="pl-kos">(</span><span class="pl-s">'load'</span><span class="pl-kos">,</span> <span class="pl-s1">_swap</span><span class="pl-kos">,</span> <span class="pl-smi">this</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_swap</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-c1">_url</span> <span class="pl-c1">!=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentUrl</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-en">removeLayer</span><span class="pl-kos">(</span><span class="pl-s1">overlay</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-en">removeLayer</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span> <span class="pl-c1">=</span> <span class="pl-s1">overlay</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-en">setOpacity</span><span class="pl-kos">(</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">opacity</span> ? <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">opacity</span> : <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">isBack</span> <span class="pl-c1">===</span> <span class="pl-c1">true</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-en">bringToBack</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">isBack</span> <span class="pl-c1">===</span> <span class="pl-c1">false</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">overlay</span><span class="pl-kos">.</span><span class="pl-en">bringToFront</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-en">getZoom</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">&lt;</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">minZoom</span><span class="pl-kos">)</span> <span class="pl-c1">||</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-en">getZoom</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">&gt;</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">maxZoom</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">.</span><span class="pl-en">removeLayer</span><span class="pl-kos">(</span><span class="pl-s1">overlay</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'setOpacity'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">opacity</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">         <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">opacity</span> <span class="pl-c1">=</span> <span class="pl-s1">opacity</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">         <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">             <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">.</span><span class="pl-en">setOpacity</span><span class="pl-kos">(</span><span class="pl-s1">opacity</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">         <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'bringToBack'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">isBack</span> <span class="pl-c1">=</span> <span class="pl-c1">true</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">.</span><span class="pl-en">bringToBack</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'bringToFront'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">isBack</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_currentOverlay</span><span class="pl-kos">.</span><span class="pl-en">bringToFront</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// See L.TileLayer.WMS: onAdd() &amp; getTileUrl()</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'updateWmsParams'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">map</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-s1">map</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">map</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_map</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Compute WMS options</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">bounds</span> <span class="pl-c1">=</span> <span class="pl-s1">map</span><span class="pl-kos">.</span><span class="pl-en">getBounds</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">size</span> <span class="pl-c1">=</span> <span class="pl-s1">map</span><span class="pl-kos">.</span><span class="pl-en">getSize</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">wmsVersion</span> <span class="pl-c1">=</span> <span class="pl-en">parseFloat</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">wmsParams</span><span class="pl-kos">.</span><span class="pl-c1">version</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">crs</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">crs</span> <span class="pl-c1">||</span> <span class="pl-s1">map</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">crs</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">projectionKey</span> <span class="pl-c1">=</span> <span class="pl-s1">wmsVersion</span> <span class="pl-c1">&gt;=</span> <span class="pl-c1">1.3</span> ? <span class="pl-s">'crs'</span> : <span class="pl-s">'srs'</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">nw</span> <span class="pl-c1">=</span> <span class="pl-s1">crs</span><span class="pl-kos">.</span><span class="pl-en">project</span><span class="pl-kos">(</span><span class="pl-s1">bounds</span><span class="pl-kos">.</span><span class="pl-en">getNorthWest</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">se</span> <span class="pl-c1">=</span> <span class="pl-s1">crs</span><span class="pl-kos">.</span><span class="pl-en">project</span><span class="pl-kos">(</span><span class="pl-s1">bounds</span><span class="pl-kos">.</span><span class="pl-en">getSouthEast</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// Assemble WMS parameter string</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">params</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">            <span class="pl-s">'width'</span>: <span class="pl-s1">size</span><span class="pl-kos">.</span><span class="pl-c1">x</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">            <span class="pl-s">'height'</span>: <span class="pl-s1">size</span><span class="pl-kos">.</span><span class="pl-c1">y</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">params</span><span class="pl-kos">[</span><span class="pl-s1">projectionKey</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-s1">crs</span><span class="pl-kos">.</span><span class="pl-c1">code</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">params</span><span class="pl-kos">.</span><span class="pl-c1">bbox</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">            <span class="pl-s1">wmsVersion</span> <span class="pl-c1">&gt;=</span> <span class="pl-c1">1.3</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1">crs</span> <span class="pl-c1">===</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">CRS</span><span class="pl-kos">.</span><span class="pl-c1">EPSG4326</span> ?</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">[</span><span class="pl-s1">se</span><span class="pl-kos">.</span><span class="pl-c1">y</span><span class="pl-kos">,</span> <span class="pl-s1">nw</span><span class="pl-kos">.</span><span class="pl-c1">x</span><span class="pl-kos">,</span> <span class="pl-s1">nw</span><span class="pl-kos">.</span><span class="pl-c1">y</span><span class="pl-kos">,</span> <span class="pl-s1">se</span><span class="pl-kos">.</span><span class="pl-c1">x</span><span class="pl-kos">]</span> :</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">[</span><span class="pl-s1">nw</span><span class="pl-kos">.</span><span class="pl-c1">x</span><span class="pl-kos">,</span> <span class="pl-s1">se</span><span class="pl-kos">.</span><span class="pl-c1">y</span><span class="pl-kos">,</span> <span class="pl-s1">se</span><span class="pl-kos">.</span><span class="pl-c1">x</span><span class="pl-kos">,</span> <span class="pl-s1">nw</span><span class="pl-kos">.</span><span class="pl-c1">y</span><span class="pl-kos">]</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">','</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-en">extend</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">wmsParams</span><span class="pl-kos">,</span> <span class="pl-s1">params</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">    <span class="pl-s">'getImageUrl'</span>: <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">uppercase</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">options</span><span class="pl-kos">.</span><span class="pl-c1">uppercase</span> <span class="pl-c1">||</span> <span class="pl-c1">false</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-s1">pstr</span> <span class="pl-c1">=</span> <span class="pl-v">L</span><span class="pl-kos">.</span><span class="pl-c1">Util</span><span class="pl-kos">.</span><span class="pl-en">getParamString</span><span class="pl-kos">(</span><span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">wmsParams</span><span class="pl-kos">,</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span><span class="pl-kos">,</span> <span class="pl-s1">uppercase</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">this</span><span class="pl-kos">.</span><span class="pl-c1">_url</span> <span class="pl-c1">+</span> <span class="pl-s1">pstr</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line"><span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-en">overlay</span> <span class="pl-c1">=</span> <span class="pl-k">function</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-s1">wms</span><span class="pl-kos">.</span><span class="pl-c1">Overlay</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">options</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line"><span class="pl-c">// Simple AJAX helper (since we can't assume jQuery etc. are present)</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">ajax</span><span class="pl-kos">(</span><span class="pl-s1">url</span><span class="pl-kos">,</span> <span class="pl-s1">callback</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-s1">context</span> <span class="pl-c1">=</span> <span class="pl-smi">this</span><span class="pl-kos">,</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">        <span class="pl-s1">request</span> <span class="pl-c1">=</span> <span class="pl-k">new</span> <span class="pl-v">XMLHttpRequest</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">    <span class="pl-s1">request</span><span class="pl-kos">.</span><span class="pl-c1">onreadystatechange</span> <span class="pl-c1">=</span> <span class="pl-s1">change</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">    <span class="pl-s1">request</span><span class="pl-kos">.</span><span class="pl-en">open</span><span class="pl-kos">(</span><span class="pl-s">'GET'</span><span class="pl-kos">,</span> <span class="pl-s1">url</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">    <span class="pl-s1">request</span><span class="pl-kos">.</span><span class="pl-en">send</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">change</span><span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">request</span><span class="pl-kos">.</span><span class="pl-c1">readyState</span> <span class="pl-c1">===</span> <span class="pl-c1">4</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">request</span><span class="pl-kos">.</span><span class="pl-c1">status</span> <span class="pl-c1">===</span> <span class="pl-c1">200</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">callback</span><span class="pl-kos">.</span><span class="pl-en">call</span><span class="pl-kos">(</span><span class="pl-s1">context</span><span class="pl-kos">,</span> <span class="pl-s1">request</span><span class="pl-kos">.</span><span class="pl-c1">responseText</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">                <span class="pl-s1">callback</span><span class="pl-kos">.</span><span class="pl-en">call</span><span class="pl-kos">(</span><span class="pl-s1">context</span><span class="pl-kos">,</span> <span class="pl-s">"error"</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">            <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">        <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">    <span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line"><span class="pl-k">return</span> <span class="pl-s1">wms</span><span class="pl-kos">;</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line"><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></td>
      </tr>
</tbody></table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 color-bg-primary border color-border-tertiary rounded-1" aria-label="Inline file action toolbar" aria-haspopup="menu" role="button">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-kebab-horizontal">
    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
</svg>
    </summary>
    <details-menu role="menu">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" tabindex="0">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" tabindex="0">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="https://github.com/heigeo/leaflet.wms/blame/1f3542158b1743a681b375e3853cd147af742d91/src/leaflet.wms.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="https://github.com/heigeo/leaflet.wms/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>


  

  <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
    <summary data-hotkey="l" aria-label="Jump to line" role="button"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line" role="dialog" aria-modal="true">
      <!-- '"` --><!-- </textarea></xmp> --><form class="js-jump-to-line-form Box-body d-flex" action="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line…" aria-label="Jump to line" autofocus="">
        <button type="submit" class="btn" data-close-dialog="">Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover" hidden="" data-tagsearch-url="/heigeo/leaflet.wms/find-definition" data-tagsearch-ref="gh-pages" data-tagsearch-path="src/leaflet.wms.js" data-tagsearch-lang="JavaScript" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:24774804,&quot;ref&quot;:&quot;gh-pages&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js?_pjax=%23repo-content-pjax-container&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="503ffabe6ebbc3a2ce6f1e84833c1de56f51c10293da20c52faf9b3648693202">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box color-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>


</div>















</div>
</div>

    </main>
  </div>

  </div>

          
<div class="footer container-xl width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 color-text-secondary border-top color-border-secondary ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">© 2021 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com/">Docs</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com/">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="24" width="24" class="octicon octicon-mark-github">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a href="https://support.github.com/" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://services.github.com/" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog/" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 color-text-tertiary"></span>
  </div>

  
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden="">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <span class="js-stale-session-flash-signed-in" hidden="">You signed in with another tab or window. <a href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden="">You signed out in another tab or window. <a href="https://github.com/heigeo/leaflet.wms/blob/gh-pages/src/leaflet.wms.js">Reload</a> to refresh your session.</span>
  </div>
    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>



  

  


<div aria-live="polite" class="sr-only">Loading complete</div></body></html>