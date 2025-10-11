

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiBattery0 = (props: IconProps) => {

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
          <Path d="M201 16c-15 0-20 3.38-20 20v15h-45c-29.547 0-35 5.453-35 35v375c0 29.547 5.453 35 35 35h240c29.547 0 35-5.453 35-35V86c0-29.547-5.453-35-35-35h-45V36c0-16.62-5-20-20-20zm-65 105c0-40-5-35 35-35h170c40 0 35-5 35 35v305c0 40 5 35-35 35H171c-40 0-35 5-35-35V121z" fill="#000" />
        </G>
      </Svg>
    );
  }

