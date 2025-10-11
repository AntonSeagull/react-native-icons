

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSagittarius = (props: IconProps) => {

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
          <Path d="M267.934 459.625l-80.013-80.08-100.315 100.12-57.517-57.516 100.25-100.252c-60.47-60.56-77.15-77.326-79.827-80.078l57.52-57.522 79.95 79.952 128.03-128.028C178.14 101.764 209.1 109.4 204.28 108.128L223.96 29.2l203.814 50.813L477.8 283.637l-79.192 19.745-26.762-107.595-126.212 126.106 80.02 80.018-57.72 57.715z" fill="#000" />
        </G>
      </Svg>
    );
  }

