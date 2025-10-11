

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPieChartSharp = (props: IconProps) => {

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
          <Path d="M58,362.09,51.49,347.5A224,224,0,0,1,256,32h16V266.37Z" />
          <Path d="M304,66.46V287.11L94.62,380.78A208.31,208.31,0,0,0,272,480c114.69,0,208-93.31,208-208C480,168.19,403.55,81.9,304,66.46Z" />
        </G>
      </Svg>
    );
  }

