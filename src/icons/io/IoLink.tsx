

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoLink = (props: IconProps) => {

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
          <Path d="M200.66,352H144a96,96,0,0,1,0-192h55.41" />
          <Path d="M312.59,160H368a96,96,0,0,1,0,192H311.34" />
        </G>
      </Svg>
    );
  }

