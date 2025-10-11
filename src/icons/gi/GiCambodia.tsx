

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiCambodia = (props: IconProps) => {

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
          <Path d="M19.823 176.292c52.634-142.707 221.115-88.048 332.738-44.2l-13.409-41.716c41.185-20.775 48.6-23.357 81.943 3.973l59.098-35.757-15.892 52.642c44.039 50.132 22.324 108.155 23.838 163.39l-155.167 71.975 37.964 75.522c-21.918 3.053-62.448-14.29-101.311-8.443l-11.905 37.608-119.7 2.122C50.901 387.048 33.051 278.67 19.822 176.292z" fill="#000" />
        </G>
      </Svg>
    );
  }

