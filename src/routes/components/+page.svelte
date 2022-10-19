<script lang="ts">
	import ProductCard from '../../components/ProductCard.svelte';
    import type {ProductData} from '../../lib/types';

    const productCardData: ProductData[] = [
      {
        "id":0,
        "name":"Hoshimachi Suisei 1st Solo Live 'STELLAR into the GALAXY'",
        "defaultPrice":685296,
        "imageURL":"https://is3.cloudhost.id/francis/public/evermos/sui1/0.webp",
        "tags":[
            "Hoshimachi Suisei",
            "Blu-ray",
            "Physical",
            "HoloLive",
            "HololiveJP"
        ],
        "headline": "The eagerly-anticipated Blu-ray of hololive production talent Hoshimachi Suisei's first solo concert <Hoshimachi Suisei 1st Solo Live 'STELLAR into the GALAXY'>!",
        "imageURLS":[
            "https://is3.cloudhost.id/francis/public/evermos/sui1/0.webp",
            "https://is3.cloudhost.id/francis/public/evermos/sui1/1.webp",
            "https://is3.cloudhost.id/francis/public/evermos/sui1/2.webp",
            "https://is3.cloudhost.id/francis/public/evermos/sui1/3.webp",
            "https://is3.cloudhost.id/francis/public/evermos/sui1/4.webp",
            "https://is3.cloudhost.id/francis/public/evermos/sui1/5.webp"
        ],
        "variants":[
            {
              "name":"Bluray",
              "isSelected":true,
              "isDisabled":false,
              "price":685296,
              "description":"Blu-ray\nSize: Approx. H172×W136×D12.5mm\nDuration: 102 minutes\nIncludedPerk: Deluxe Photo Booklet\n\n・Blu-ray Contents\n1. GHOST\n2. Run\n3. bye bye rainy\n4. Bluerose\n5. Je t'aime。\n6. SelfishDazzling\n7. Galaxy Destiny (Hoshimachi Suisei, Inui Toko)\n8. OUT OF FRAME (Hoshimachi Suisei, Inui Toko)\n9. Hikari no Machi (Hoshimachi Suisei, AZKi)\n10. The Last Frontier (Hoshimachi Suisei, AZKi)\n11. Starry Jet\n12. comet -Midnight Jazz Arrange-\n13. SANJIJUUNIFUN\n14. Andromeda\n15. Her Trail on the Celestial Sphere\n16. Stellar Stellar\nEN1. Kirameki Rider\nEN2. NEXT COLOR PLANET"
            },
            {
               "name":"Digital Download",
               "isSelected":false,
               "isDisabled":false,
               "price":125296,
               "description":"Digital Download\nSize: Approx. H172×W136×D12.5mm\nDuration: 102 minutes\nIncludedPerk: Deluxe Photo Booklet\n\n・Blu-ray Contents\n1. GHOST\n2. Run\n3. bye bye rainy\n4. Bluerose\n5. Je t'aime。\n6. SelfishDazzling\n7. Galaxy Destiny (Hoshimachi Suisei, Inui Toko)\n8. OUT OF FRAME (Hoshimachi Suisei, Inui Toko)\n9. Hikari no Machi (Hoshimachi Suisei, AZKi)\n10. The Last Frontier (Hoshimachi Suisei, AZKi)\n11. Starry Jet\n12. comet -Midnight Jazz Arrange-\n13. SANJIJUUNIFUN\n14. Andromeda\n15. Her Trail on the Celestial Sphere\n16. Stellar Stellar\nEN1. Kirameki Rider\nEN2. NEXT COLOR PLANET"
            },
            {
               "name":"Raffle",
               "isSelected":false,
               "isDisabled":true,
               "price":50000,
               "description":"Free raffle no longer available"
            }
         ],
         "selectedVariantIndex":0,
         "relatedInfo":"Special Concert Website: https://stellarintothegalaxy.hololive.tv/",
         "options":"Contact orders.catalog@franciswibisono.com"
      }
   ]
</script>

<!-- <ProductCard {productCardData}/> -->
