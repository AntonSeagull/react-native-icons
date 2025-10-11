

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChartHistogram = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 3v18h18" />
          <Path d="M20 18v3" />
          <Path d="M16 16v5" />
          <Path d="M12 13v8" />
          <Path d="M8 16v5" />
          <Path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
        </G>
      </Svg>
    );
  }

