

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiBarChartAlt = (props: IconProps) => {

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
          <Path d="M13 6h2v11h-2zm4-3h2v14h-2zM9 9h2v8H9zM4 19h16v2H4zm1-7h2v5H5z" />
        </G>
      </Svg>
    );
  }

