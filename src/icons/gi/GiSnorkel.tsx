

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiSnorkel = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M353.5 16c-15 0-15 15-15 30v60a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15v210c0 33.137-26.863 60-60 60s-60-26.863-60-60c0 0 15-15 15-30s45-30 45-45-15-15-15-15-8.565 8.59-20.72 18.25A15 15 0 0 0 218.5 316a15 15 0 0 0 .72 4.53C208.733 326.586 197.885 331 188.5 331c-9.375 0-20.214-4.395-30.688-10.438A15 15 0 0 0 158.5 316a15 15 0 0 0-24.28-11.78C122.072 294.562 113.5 286 113.5 286s-15 0-15 15 45 30 45 45 15 30 15 30c0 66.274 53.726 120 120 120s120-53.726 120-120V166a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15V46c0-15 0-30-15-30h-30z" />
        </G>
      </Svg>
    );
  }

