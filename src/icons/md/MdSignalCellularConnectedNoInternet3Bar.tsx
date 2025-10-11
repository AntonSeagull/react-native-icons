

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdSignalCellularConnectedNoInternet3Bar = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M0 0h24v24H0V0z" fill="none" />
          <Path  d="M22 8V2L2 22h16V8h4z" fillOpacity=".3" />
          <Path  d="M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z" />
        </G>
      </Svg>
    );
  }

