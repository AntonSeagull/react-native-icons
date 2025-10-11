

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiCss3 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M16.5 1.26l-2.407 12.064-7.277 2.416-6.316-2.416 0.643-3.223h2.688l-0.263 1.33 3.818 1.457 4.398-1.457 0.614-3.068h-10.929l0.524-2.686h10.94l0.345-1.73h-10.931l0.533-2.687h13.62z" fill="#000000" />
        </G>
      </Svg>
    );
  }

