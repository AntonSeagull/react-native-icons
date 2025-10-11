

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoRainyOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M114.61,162.85A16.07,16.07,0,0,0,128,149.6C140.09,76.17,193.63,32,256,32c57.93,0,96.62,37.75,112.2,77.74a15.84,15.84,0,0,0,12.2,9.87c50,8.15,91.6,41.54,91.6,99.59C472,278.6,423.4,320,364,320H130c-49.5,0-90-24.7-90-79.2C40,192.33,78.67,168.58,114.61,162.85Z" />
        </G>
      </Svg>
    );
  }

