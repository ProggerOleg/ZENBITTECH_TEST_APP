import React from 'react';
import DealCard from '../deal_card/DealCard';
import { useGetAllDealsQuery } from '../../api/dealsApi'; // Import the useGetAllDealsQuery hook

const OpenDeals = () => {
    // Use the generated query hook to fetch all deals
    const { data: deals, isLoading, isError } = useGetAllDealsQuery();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching deals</p>;
    }

    return (
        <section className="second_block py-4" id="second_block">
            <div className="open_deals">
                <p className="block_title">Open Deals</p>
                <div className="container-xxl card-container">
                    <div className="row cards">
                        {deals.map((deal) => (
                            <div key={deal.id} className="col-sm-6">
                                <DealCard
                                    image={deal.Image}
                                    title={deal.title}
                                    price={deal.price}
                                    yields={deal.yield}
                                    tiket={deal.tiket}
                                    days={deal.days}
                                    sold={deal.sold}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenDeals;
