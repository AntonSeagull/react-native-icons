

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiUsbBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M251.2,118.4l-48-36A12,12,0,0,0,184,92v24H76V76H98.06a36,36,0,1,0,0-24H72A20,20,0,0,0,52,72v44H12a12,12,0,0,0,0,24H52v44a20,20,0,0,0,20,20H96v4a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H116a20,20,0,0,0-20,20v4H76V140H184v24a12,12,0,0,0,19.2,9.6l48-36a12,12,0,0,0,0-19.2ZM132,52a12,12,0,1,1-12,12A12,12,0,0,1,132,52ZM120,180h24v24H120Zm88-40V116l16,12Z" />
        </G>
      </Svg>
    );
  }

