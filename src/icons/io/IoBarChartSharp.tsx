

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBarChartSharp = (props: IconProps) => {

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
          <Path d="M192,432H80V208H192Z" />
          <Path d="M336,432H224V160H336Z" />
          <Path d="M479.64,432h-112V96h112Z" />
        </G>
      </Svg>
    );
  }

