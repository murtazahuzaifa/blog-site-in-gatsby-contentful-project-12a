import React, { FC, useEffect }  from 'react';
import {PageProps} from 'gatsby';
import PageLayout from '../components/PageLayout/PageLayout';
import { Typography } from '@material-ui/core'
import Seo from '../components/Seo'

interface Props { }

const contact: FC<PageProps<Props>> = ({uri}) => {
    return (
        <PageLayout path={uri}>
            <Seo title='Contact' />
            <Typography variant='h2' > Contact </Typography>
            <Typography variant='body1' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ut amet tenetur repellendus aut optio incidunt quod laudantium eius possimus aliquid repudiandae, hic ullam saepe voluptate nemo, reiciendis cumque illo. Saepe minima accusantium blanditiis iure eum, non odit optio suscipit, placeat quasi consequatur nihil molestias similique, quas fuga sint dolorum dolorem voluptatibus labore porro voluptatem aliquam! Voluptatum provident soluta non rem numquam nam asperiores incidunt omnis? Molestiae dolorem facilis non quo enim? Consectetur quaerat magni quas, aut dolorem quasi eligendi earum nihil corrupti adipisci omnis, recusandae deleniti assumenda at esse perspiciatis debitis. Excepturi quibusdam dolor sint animi. Officia, asperiores molestias?
            </Typography>
            
        </PageLayout>
    )
}

export default contact;