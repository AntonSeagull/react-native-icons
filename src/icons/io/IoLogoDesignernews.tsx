

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLogoDesignernews = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M339.43,64V259.6h-41.6L225.6,141.28l1.94,118.32H181.71V131.2L139.09,96c1.14,1.44,2.28,2.88,3.31,4.44,11.43,16.68,17.14,36.6,17.14,60.6,0,59-35,98.52-87.88,98.52H0v.48L228.11,448H512V205.72Z" />
          <Path  d="M111.89,162.52c0-34.8-16.23-54.12-45.38-54.12H44.57V215.2H66.29C96,215.2,111.89,196.72,111.89,162.52Z" />
        </G>
      </Svg>
    );
  }

