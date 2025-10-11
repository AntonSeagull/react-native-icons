

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiChartmogul = (props: IconProps) => {

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
          <Path d="M10.621 19.89V8.75L2.867 19.89H0V4.11h2.758v11.112l7.754-11.113h2.867v11.14L21.16 4.11H24v15.782h-2.73V8.75l-7.755 11.14Z" />
        </G>
      </Svg>
    );
  }

