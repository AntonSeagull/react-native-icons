

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoTabletLandscapeSharp = (props: IconProps) => {

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
          <Path d="M0,82V430a18,18,0,0,0,18,18H494a18,18,0,0,0,18-18V82a18,18,0,0,0-18-18H18A18,18,0,0,0,0,82ZM448,412H64V100H448Z" />
        </G>
      </Svg>
    );
  }

