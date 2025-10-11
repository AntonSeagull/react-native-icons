

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoAngular = (props: IconProps) => {

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
          <Path d="M10.483 12.482h3.034L12 8.831z" />
          <Path d="M12 3.074 3.689 6.038l1.268 10.987 7.043 3.9 7.043-3.9 1.268-10.987L12 3.074zm5.187 13.621H15.25l-1.045-2.606h-4.41L8.75 16.695H6.813L12 5.047l5.187 11.648z" />
        </G>
      </Svg>
    );
  }

