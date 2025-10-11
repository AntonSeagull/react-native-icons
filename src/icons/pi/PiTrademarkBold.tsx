

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrademarkBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm64-104v40a12,12,0,0,1-24,0V134.09l-8.19,7a12,12,0,0,1-15.62,0l-8.19-7V148a12,12,0,0,1-24,0V120H100v28a12,12,0,0,1-24,0V120H72a12,12,0,0,1,0-24h52a12,12,0,0,1,7.81,2.89L152,116.2l20.19-17.31A12,12,0,0,1,192,108Z" />
        </G>
      </Svg>
    );
  }

