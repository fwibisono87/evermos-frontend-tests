<script lang="ts">
	import ProductCard from '../../components/ProductCard.svelte';
    import type {ProductCardData} from '../../lib/types';

    const productCardData: ProductCardData = {
        id: 0,
        name: 'Hoshimachi Suisei 1st Solo Live "STELLAR into the GALAXY"',
        defaultPrice: 685296,
        imageURL: 'https://cdn.shopify.com/s/files/1/0529/2641/5045/t/23/assets/suisei_1st_bd_ec_01_en_png_700x.png',
        tags: [
            {
                title: 'Hoshimachi Suisei'
            },
            {
                title: 'Bluray'
            },
            {
                title: 'Physical'
            },
            {
                title: 'Hololive'
            },
            {
                title: 'HololiveJP'
            }
        ],

    }
</script>

<ProductCard {productCardData}/>