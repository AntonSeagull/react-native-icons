

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgServerless = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11.7872 6H5V9H10.6953L11.7872 6Z" fill="currentColor" />
          <Path  d="M9.96735 11H5V14H8.87544L9.96735 11Z" fill="currentColor" />
          <Path  d="M11.0038 14L12.0957 11H20V14H11.0038Z" fill="currentColor" />
          <Path  d="M8.1475 16H5V19H7.05559L8.1475 16Z" fill="currentColor" />
          <Path  d="M9.18394 19L10.2759 16H20V19H9.18394Z" fill="currentColor" />
          <Path  d="M12.8236 9L13.9156 6H20V9H12.8236Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

